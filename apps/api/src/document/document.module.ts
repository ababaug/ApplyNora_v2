import { Module } from '@nestjs/common';
import { DocumentController } from './document.controller.js';
import { DocumentService } from './document.service.js';
import { StorageService } from './storage.service.js';
import { CvModule } from '../cv/cv.module.js';

@Module({
  imports: [CvModule],
  controllers: [DocumentController],
  providers: [DocumentService, StorageService],
  exports: [DocumentService],
})
export class DocumentModule {}