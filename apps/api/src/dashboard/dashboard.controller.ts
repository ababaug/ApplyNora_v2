import { Controller, Get, UseGuards, Req } from '@nestjs/common';
import { AuthGuard } from '../auth/guards/auth.guard.js';
import { PrismaService } from '../prisma/prisma.service.js';

@Controller('v1/dashboard')
@UseGuards(AuthGuard)
export class DashboardController {
  constructor(private prisma: PrismaService) {}

  @Get('overview')
  async getOverview(@Req() req: any) {
    const profile = await this.prisma.candidateProfile.findUnique({
      where: { userId: req.user.id }
    });

    // Providing empty lists or zeroes for future integrations (Job radar, CV builder etc.)
    return {
      profileCompletion: profile ? 100 : 0,
      recentActivity: [],
      jobRadarMatches: 0,
      applicationStats: {
        active: 0,
        interviewing: 0,
        rejected: 0,
      },
      documents: [],
      pendingActions: [],
      notifications: []
    };
  }
}