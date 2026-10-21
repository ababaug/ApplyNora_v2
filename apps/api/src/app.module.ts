import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { AuthModule } from './auth/auth.module.js';
import { PrismaModule } from './prisma/prisma.module.js';
import { ProfileModule } from './profile/profile.module.js';
import { DashboardModule } from './dashboard/dashboard.module.js';
import { AccountModule } from './account/account.module.js';
import { DocumentModule } from './document/document.module.js';
import { CvModule } from './cv/cv.module.js';
import { TemplateModule } from './template/template.module.js';

@Module({
  imports: [PrismaModule, AuthModule, ProfileModule, DashboardModule, AccountModule, DocumentModule, CvModule, TemplateModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
