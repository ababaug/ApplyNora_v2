import { Injectable } from '@nestjs/common';
import PDFDocument from 'pdfkit';
import { Document, Packer, Paragraph, TextRun } from 'docx';
import { CvService } from './cv.service.js';

@Injectable()
export class ExportService {
  constructor(private cvService: CvService) {}

  async generatePdf(userId: string, cvId: string): Promise<Buffer> {
    const cv = await this.cvService.get(userId, cvId);

    return new Promise((resolve, reject) => {
      const doc = new PDFDocument({ margin: 50 });
      const chunks: Buffer[] = [];

      doc.on('data', chunk => chunks.push(chunk));
      doc.on('end', () => resolve(Buffer.concat(chunks)));
      doc.on('error', reject);

      const structuredData: any = cv.structuredData;

      doc.fontSize(24).text(structuredData.fullName || 'Your Name', { align: 'center' });
      doc.moveDown();

      if (structuredData.summary) {
        doc.fontSize(12).text(structuredData.summary);
        doc.moveDown();
      }

      if (structuredData.experience && structuredData.experience.length > 0) {
        doc.fontSize(16).text('Experience');
        doc.moveDown(0.5);
        structuredData.experience.forEach((exp: any) => {
          doc.fontSize(14).text(`${exp.title || 'Role'} at ${exp.company || 'Company'}`);
          doc.fontSize(10).fillColor('gray').text(exp.dates || 'Dates').fillColor('black');
          doc.fontSize(12).text(exp.description || '');
          doc.moveDown();
        });
      }

      doc.end();
    });
  }

  async generateDocx(userId: string, cvId: string): Promise<Buffer> {
    const cv = await this.cvService.get(userId, cvId);
    const structuredData: any = cv.structuredData;

    const children: any[] = [
      new Paragraph({
        children: [
          new TextRun({ text: structuredData.fullName || 'Your Name', bold: true, size: 48 })
        ]
      }),
      new Paragraph({ text: '' }),
    ];

    if (structuredData.summary) {
      children.push(new Paragraph({ text: structuredData.summary }));
      children.push(new Paragraph({ text: '' }));
    }

    if (structuredData.experience && structuredData.experience.length > 0) {
      children.push(new Paragraph({
        children: [new TextRun({ text: 'Experience', bold: true, size: 32 })]
      }));

      structuredData.experience.forEach((exp: any) => {
        children.push(new Paragraph({
          children: [new TextRun({ text: `${exp.title || 'Role'} at ${exp.company || 'Company'}`, bold: true, size: 28 })]
        }));
        children.push(new Paragraph({
          children: [new TextRun({ text: exp.dates || 'Dates', italics: true, color: '888888' })]
        }));
        children.push(new Paragraph({ text: exp.description || '' }));
        children.push(new Paragraph({ text: '' }));
      });
    }

    const doc = new Document({
      sections: [{ properties: {}, children }]
    });

    return Packer.toBuffer(doc);
  }
}