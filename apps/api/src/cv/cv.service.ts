import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class CvService {
  constructor(private prisma: PrismaService) {}

  async create(userId: string, title: string, structuredData: any, templateId: string = 'professional') {
    const cv = await this.prisma.cV.create({
      data: {
        userId,
        title,
        templateId,
        structuredData,
      }
    });

    await this.prisma.cVVersion.create({
      data: {
        cvId: cv.id,
        versionNumber: 1,
        structuredData
      }
    });

    return cv;
  }

  async list(userId: string) {
    return this.prisma.cV.findMany({ where: { userId } });
  }

  async get(userId: string, id: string) {
    const cv = await this.prisma.cV.findUnique({ where: { id } });
    if (!cv || cv.userId !== userId) throw new NotFoundException('CV not found');
    return cv;
  }

  async update(userId: string, id: string, data: any) {
    const cv = await this.get(userId, id);

    // Whitelist allowed fields to prevent mass-assignment vulnerability
    const updateData: any = {};
    if (data.title !== undefined) updateData.title = data.title;
    if (data.templateId !== undefined) updateData.templateId = data.templateId;
    if (data.structuredData !== undefined) updateData.structuredData = data.structuredData;

    const updated = await this.prisma.cV.update({
      where: { id },
      data: {
        ...updateData,
        currentVersion: cv.currentVersion + 1,
      }
    });

    await this.prisma.cVVersion.create({
      data: {
        cvId: id,
        versionNumber: updated.currentVersion,
        structuredData: updated.structuredData as any,
      }
    });

    return updated;
  }

  async delete(userId: string, id: string) {
    await this.get(userId, id); // Verify ownership
    return this.prisma.cV.delete({ where: { id } });
  }

  async duplicate(userId: string, id: string) {
    const cv = await this.get(userId, id);
    return this.create(userId, `${cv.title} (Copy)`, cv.structuredData, cv.templateId);
  }

  async versions(userId: string, id: string) {
    await this.get(userId, id);
    return this.prisma.cVVersion.findMany({
      where: { cvId: id },
      orderBy: { versionNumber: 'desc' }
    });
  }

  async restore(userId: string, id: string, versionId: string) {
    await this.get(userId, id);
    const version = await this.prisma.cVVersion.findUnique({ where: { id: versionId } });
    if (!version || version.cvId !== id) throw new NotFoundException();

    return this.update(userId, id, { structuredData: version.structuredData });
  }
}