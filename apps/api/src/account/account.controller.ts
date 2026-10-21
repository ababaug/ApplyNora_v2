import { Controller, Get, UseGuards, Req, Delete, Param } from '@nestjs/common';
import { AuthGuard } from '../auth/guards/auth.guard.js';
import { PrismaService } from '../prisma/prisma.service.js';

@Controller('v1/account')
@UseGuards(AuthGuard)
export class AccountController {
  constructor(private prisma: PrismaService) {}

  @Get('settings')
  async getSettings(@Req() req: any) {
    return this.prisma.user.findUnique({
      where: { id: req.user.id },
      select: { email: true, role: true, status: true, emailVerifiedAt: true }
    });
  }

  @Get('sessions')
  async getSessions(@Req() req: any) {
    const sessions = await this.prisma.userSession.findMany({
      where: { userId: req.user.id, revokedAt: null }
    });
    return sessions.map(s => ({ id: s.id, expiresAt: s.expiresAt, createdAt: s.createdAt }));
  }

  @Delete('sessions/:id')
  async revokeSession(@Req() req: any, @Param('id') id: string) {
    await this.prisma.userSession.update({
      where: { id, userId: req.user.id },
      data: { revokedAt: new Date() }
    });
    return { success: true };
  }
}