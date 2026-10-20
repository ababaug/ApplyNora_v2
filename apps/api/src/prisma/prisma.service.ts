import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { env } from '../env.js';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  constructor() {
    super({
      datasources: {
        db: {
          url: env.DATABASE_URL,
        },
      },
    });
  }
  async onModuleInit() {
    await this.$connect();
  }
}