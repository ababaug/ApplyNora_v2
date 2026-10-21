import { Module } from '@nestjs/common';
import { CvController } from './cv.controller.js';
import { CvService } from './cv.service.js';
import { ExportService } from './export.service.js';

@Module({
  controllers: [CvController],
  providers: [CvService, ExportService],
  exports: [CvService],
})
export class CvModule {}