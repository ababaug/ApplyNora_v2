import { Injectable } from '@nestjs/common';
import * as fs from 'fs/promises';
import * as path from 'path';

@Injectable()
export class StorageService {
  private storagePath = path.resolve(process.cwd(), 'uploads');

  constructor() {
    this.init();
  }

  private async init() {
    try {
      await fs.access(this.storagePath);
    } catch {
      await fs.mkdir(this.storagePath, { recursive: true });
    }
  }

  async saveFile(key: string, buffer: Buffer): Promise<void> {
    const filePath = path.join(this.storagePath, key);
    await fs.writeFile(filePath, buffer);
  }

  async deleteFile(key: string): Promise<void> {
    const filePath = path.join(this.storagePath, key);
    await fs.unlink(filePath).catch(() => null);
  }

  async getFile(key: string): Promise<Buffer> {
    const filePath = path.join(this.storagePath, key);
    return fs.readFile(filePath);
  }
}