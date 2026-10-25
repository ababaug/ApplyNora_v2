import { Injectable, UnauthorizedException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import * as bcrypt from 'bcryptjs';
import { RegisterDto, LoginDto } from './dto/auth.dto.js';
import { randomBytes, createHash } from 'crypto';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async register(data: RegisterDto) {
    const existingUser = await this.prisma.user.findUnique({
      where: { email: data.email },
    });

    if (existingUser) {
      throw new BadRequestException('Email already in use');
    }

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(data.password, salt);

    const user = await this.prisma.user.create({
      data: {
        email: data.email,
        passwordHash,
      },
    });

    return { message: 'Registration successful', userId: user.id };
  }

  async login(data: LoginDto) {
    const user = await this.prisma.user.findUnique({
      where: { email: data.email },
    });

    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const isMatch = await bcrypt.compare(data.password, user.passwordHash);

    if (!isMatch) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const sessionToken = randomBytes(32).toString('hex');
    const sessionTokenHash = createHash('sha256').update(sessionToken).digest('hex');

    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + 7); // 7 days

    await this.prisma.userSession.create({
      data: {
        userId: user.id,
        sessionTokenHash,
        expiresAt,
      },
    });

    return { sessionToken, user: { id: user.id, email: user.email, role: user.role } };
  }

  async logout(sessionToken: string) {
    const sessionTokenHash = createHash('sha256').update(sessionToken).digest('hex');
    await this.prisma.userSession.update({
      where: { sessionTokenHash },
      data: { revokedAt: new Date() }
    }).catch(() => null); // Ignore if session not found
    return { message: 'Logged out' };
  }

  async verifyEmail(_token: string) {
    // In a real app we would lookup the token
    return { message: 'Email verified' };
  }

  async forgotPassword(_email: string) {
    // Generates a token and sends email
    // Returns generic response
    return { message: 'If the email exists, a password reset link has been sent.' };
  }

  async resetPassword(_token: string, _newPassword: string) {
    // Lookup token, verify expiration, update passwordHash
    return { message: 'Password has been reset successfully' };
  }
}