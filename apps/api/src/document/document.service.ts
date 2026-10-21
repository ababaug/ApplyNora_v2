import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { StorageService } from './storage.service.js';
import { randomUUID } from 'crypto';
// @ts-ignore
import pdfParse from 'pdf-parse';
import * as mammoth from 'mammoth';
import { CvService } from '../cv/cv.service.js';

@Injectable()
export class DocumentService {
  constructor(private prisma: PrismaService, private storage: StorageService, private cvService: CvService) {}

  async upload(userId: string, file: any) {
    if (file.size > 10 * 1024 * 1024) {
      throw new BadRequestException('File size must be under 10MB');
    }

    const fileExtension = file.originalname.split('.').pop() || '';
    const safeExtension = fileExtension.replace(/[^a-zA-Z0-9]/g, '');
    const storageKey = `${randomUUID()}.${safeExtension}`;
    await this.storage.saveFile(storageKey, file.buffer);

    const document = await this.prisma.document.create({
      data: {
        userId,
        name: file.originalname,
        originalFilename: file.originalname,
        mimeType: file.mimetype,
        size: file.size,
        storageKey,
      }
    });

    await this.prisma.documentVersion.create({
      data: {
        documentId: document.id,
        versionNumber: 1,
        storageKey,
      }
    });

    // Fire off async parsing job
    this.parseDocument(document.id, file).catch(console.error);

    return document;
  }

  private async parseDocument(documentId: string, file: any) {
    const job = await this.prisma.documentProcessingJob.create({
      data: { documentId, status: 'PROCESSING', startedAt: new Date() }
    });

    try {
      let text = '';
      if (file.mimetype === 'application/pdf') {
        const parsed = await pdfParse(file.buffer);
        text = parsed.text;
      } else if (file.mimetype === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
        const parsed = await mammoth.extractRawText({ buffer: file.buffer });
        text = parsed.value;
      } else {
        throw new Error('Unsupported format for parsing');
      }

      if (!text.trim()) {
        throw new Error('No extractable text found. (Scanned PDF?)');
      }

      // Very rough regex-based extraction as placeholder for actual LLM extraction
      const lines = text.split('\n').map(l => l.trim()).filter(Boolean);
      const possibleName = lines.length > 0 ? lines[0] : 'Parsed Name';
      const possibleEmailMatch = text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi);
      const possibleEmail = possibleEmailMatch ? possibleEmailMatch[0] : '';
      const possiblePhoneMatch = text.match(/(\+?\d{1,4}[ -]?\(?\d{1,3}\)?[ -]?\d{1,4}[ -]?\d{1,4}[ -]?\d{1,4})/g);
      const possiblePhone = possiblePhoneMatch ? possiblePhoneMatch[0] : '';

      const structuredData = {
        fullName: possibleName,
        email: possibleEmail,
        phone: possiblePhone,
        summary: `Extracted summary placeholder from ${file.originalname}`,
        experience: [{ title: 'Extracted Role', company: 'Extracted Company', dates: '2020 - Present', description: 'Extracted responsibilities...' }],
        education: [{ institution: 'Extracted University', degree: 'Extracted Degree', dates: '2016 - 2020' }],
        skills: ['Parsed Skill 1', 'Parsed Skill 2']
      };

      const doc = await this.prisma.document.findUnique({ where: { id: documentId } });
      if (doc) {
        await this.cvService.create(doc.userId, `Imported from ${file.originalname}`, structuredData, 'professional');
      }

      await this.prisma.documentProcessingJob.update({
        where: { id: job.id },
        data: { status: 'COMPLETED', completedAt: new Date() }
      });
    } catch (err: any) {
      await this.prisma.documentProcessingJob.update({
        where: { id: job.id },
        data: { status: 'FAILED', errorCode: err.message, completedAt: new Date() }
      });
    }
  }

  async list(userId: string) {
    return this.prisma.document.findMany({ where: { userId } });
  }

  async get(userId: string, documentId: string) {
    const doc = await this.prisma.document.findUnique({ where: { id: documentId } });
    if (!doc || doc.userId !== userId) throw new NotFoundException();
    return doc;
  }

  async download(userId: string, documentId: string) {
    const doc = await this.get(userId, documentId);
    const buffer = await this.storage.getFile(doc.storageKey);
    return { buffer, mimeType: doc.mimeType, filename: doc.originalFilename };
  }

  async delete(userId: string, documentId: string) {
    const doc = await this.get(userId, documentId);
    await this.storage.deleteFile(doc.storageKey);
    // In real app we should delete all version files too
    await this.prisma.document.delete({ where: { id: documentId } });
    return { success: true };
  }

  async rename(userId: string, documentId: string, name: string) {
    await this.get(userId, documentId); // Verify ownership
    return this.prisma.document.update({
      where: { id: documentId },
      data: { name }
    });
  }
}