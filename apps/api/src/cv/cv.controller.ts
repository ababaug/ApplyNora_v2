import { Controller, Post, Get, Patch, Delete, Param, Body, Req, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '../auth/guards/auth.guard.js';
import { CvService } from './cv.service.js';
import { ExportService } from './export.service.js';

@Controller('v1/cvs')
@UseGuards(AuthGuard)
export class CvController {
  constructor(private cvService: CvService, private exportService: ExportService) {}

  @Post()
  async create(@Req() req: any, @Body() body: any) {
    return this.cvService.create(req.user.id, body.title, body.structuredData, body.templateId);
  }

  @Get()
  async list(@Req() req: any) {
    return this.cvService.list(req.user.id);
  }

  @Get(':id')
  async get(@Req() req: any, @Param('id') id: string) {
    return this.cvService.get(req.user.id, id);
  }

  @Patch(':id')
  async update(@Req() req: any, @Param('id') id: string, @Body() body: any) {
    return this.cvService.update(req.user.id, id, body);
  }

  @Delete(':id')
  async delete(@Req() req: any, @Param('id') id: string) {
    return this.cvService.delete(req.user.id, id);
  }

  @Post(':id/duplicate')
  async duplicate(@Req() req: any, @Param('id') id: string) {
    return this.cvService.duplicate(req.user.id, id);
  }

  @Get(':id/versions')
  async versions(@Req() req: any, @Param('id') id: string) {
    return this.cvService.versions(req.user.id, id);
  }

  @Post(':id/restore')
  async restore(@Req() req: any, @Param('id') id: string, @Body('versionId') versionId: string) {
    return this.cvService.restore(req.user.id, id, versionId);
  }

  @Get(':id/export/pdf')
  async exportPdf(@Req() req: any, @Param('id') id: string, @Res() res: any) {
    const buffer = await this.exportService.generatePdf(req.user.id, id);
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename="cv-${id}.pdf"`);
    res.send(buffer);
  }

  @Get(':id/export/docx')
  async exportDocx(@Req() req: any, @Param('id') id: string, @Res() res: any) {
    const buffer = await this.exportService.generateDocx(req.user.id, id);
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document');
    res.setHeader('Content-Disposition', `attachment; filename="cv-${id}.docx"`);
    res.send(buffer);
  }
}