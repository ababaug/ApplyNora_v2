import { Injectable, NotFoundException } from '@nestjs/common';

const MOCK_TEMPLATES = [
  { id: 'professional', name: 'Professional', description: 'Clean and ATS-friendly.' },
  { id: 'modern', name: 'Modern', description: 'Stand out with a modern layout.' },
  { id: 'minimal', name: 'Minimal', description: 'Simple and elegant.' }
];

@Injectable()
export class TemplateService {
  async list() {
    return MOCK_TEMPLATES;
  }

  async get(id: string) {
    const tpl = MOCK_TEMPLATES.find(t => t.id === id);
    if (!tpl) throw new NotFoundException('Template not found');
    return tpl;
  }
}