import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service.js';
import { createHash } from 'crypto';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private prisma: PrismaService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = request.cookies['session_token'];

    if (!token) {
      throw new UnauthorizedException();
    }

    const sessionTokenHash = createHash('sha256').update(token).digest('hex');

    const session = await this.prisma.userSession.findUnique({
      where: { sessionTokenHash },
      include: { user: true }
    });

    if (!session || session.revokedAt || session.expiresAt < new Date()) {
      throw new UnauthorizedException();
    }

    request.user = session.user;
    return true;
  }
}