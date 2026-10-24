
import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { AuthModule } from './auth/auth.module.js';
import { PrismaModule } from './prisma/prisma.module.js';
import { ProfileModule } from './profile/profile.module.js';
import { DashboardModule } from './dashboard/dashboard.module.js';
import { AccountModule } from './account/account.module.js';

@Module({
  imports: [
    PrismaModule,
    AuthModule,
    ProfileModule,
    DashboardModule,
    AccountModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
