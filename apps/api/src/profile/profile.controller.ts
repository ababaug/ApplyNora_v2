import { Controller, Get, Patch, Body, UseGuards, Req, Put } from '@nestjs/common';
import { AuthGuard } from '../auth/guards/auth.guard.js';
import { PrismaService } from '../prisma/prisma.service.js';

@Controller('v1/profile')
@UseGuards(AuthGuard)
export class ProfileController {
  constructor(private prisma: PrismaService) {}

  @Get('me')
  async getProfile(@Req() req: any) {
    const profile = await this.prisma.candidateProfile.findUnique({
      where: { userId: req.user.id },
    });
    return profile || {};
  }

  @Patch('me')
  async updateProfile(@Req() req: any, @Body() body: any) {
    const profile = await this.prisma.candidateProfile.upsert({
      where: { userId: req.user.id },
      update: body,
      create: {
        userId: req.user.id,
        ...body,
      },
    });
    return profile;
  }

  @Get('preferences')
  async getPreferences(@Req() req: any) {
    const preferences = await this.prisma.jobPreference.findUnique({
      where: { userId: req.user.id },
    });
    return preferences || {};
  }

  @Put('preferences')
  async updatePreferences(@Req() req: any, @Body() body: any) {
    const preferences = await this.prisma.jobPreference.upsert({
      where: { userId: req.user.id },
      update: body,
      create: {
        userId: req.user.id,
        ...body,
      },
    });
    return preferences;
  }
}