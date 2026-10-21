import { Controller, Post, Get, Delete, Patch, Param, UseGuards, Req, UseInterceptors, UploadedFile, Res, Body } from '@nestjs/common';
import { AuthGuard } from '../auth/guards/auth.guard.js';
import { DocumentService } from './document.service.js';
import { FileInterceptor } from '@nestjs/platform-express';
import type { Response } from 'express';

@Controller('v1/documents')
@UseGuards(AuthGuard)
export class DocumentController {
  constructor(private documentService: DocumentService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async upload(@Req() req: any, @UploadedFile() file: any) {
    return this.documentService.upload(req.user.id, file);
  }

  @Get()
  async list(@Req() req: any) {
    return this.documentService.list(req.user.id);
  }

  @Get(':id')
  async get(@Req() req: any, @Param('id') id: string) {
    return this.documentService.get(req.user.id, id);
  }

  @Get(':id/download')
  async download(@Req() req: any, @Param('id') id: string, @Res() res: Response) {
    const fileData = await this.documentService.download(req.user.id, id);
    res.setHeader('Content-Type', fileData.mimeType);
    res.setHeader('Content-Disposition', `attachment; filename="${fileData.filename}"`);
    res.send(fileData.buffer);
  }

  @Delete(':id')
  async delete(@Req() req: any, @Param('id') id: string) {
    return this.documentService.delete(req.user.id, id);
  }

  @Patch(':id')
  async rename(@Req() req: any, @Param('id') id: string, @Body('name') name: string) {
    return this.documentService.rename(req.user.id, id, name);
  }
}