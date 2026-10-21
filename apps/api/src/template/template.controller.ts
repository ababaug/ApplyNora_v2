import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { AuthGuard } from '../auth/guards/auth.guard.js';
import { TemplateService } from './template.service.js';

@Controller('v1/cv-templates')
@UseGuards(AuthGuard)
export class TemplateController {
  constructor(private templateService: TemplateService) {}

  @Get()
  async list() {
    return this.templateService.list();
  }

  @Get(':id')
  async get(@Param('id') id: string) {
    return this.templateService.get(id);
  }
}