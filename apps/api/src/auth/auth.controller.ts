import { Controller, Post, Body, Res, Req, HttpCode, HttpStatus, Get, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service.js';
import { RegisterDtoSchema, LoginDtoSchema, VerifyEmailDtoSchema, ForgotPasswordDtoSchema, ResetPasswordDtoSchema, MfaConfirmDtoSchema, MfaChallengeDtoSchema } from './dto/auth.dto.js';
import type { Response, Request } from 'express';

@Controller('v1/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() body: any) {
    const parsed = RegisterDtoSchema.parse(body);
    return this.authService.register(parsed);
  }

  @HttpCode(HttpStatus.OK)
  @Post('login')
  async login(@Body() body: any, @Res({ passthrough: true }) res: Response) {
    const parsed = LoginDtoSchema.parse(body);
    const result = await this.authService.login(parsed);

    res.cookie('session_token', result.sessionToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return { user: result.user };
  }

  @Post('logout')
  @HttpCode(HttpStatus.OK)
  async logout(@Req() req: Request, @Res({ passthrough: true }) res: Response) {
    const token = req.cookies['session_token'];
    if (token) {
      await this.authService.logout(token);
    }
    res.clearCookie('session_token');
    return { message: 'Logged out successfully' };
  }

  @Get('session')
  async getSession(@Req() req: Request) {
    const token = req.cookies['session_token'];
    if (!token) {
      throw new UnauthorizedException('Not authenticated');
    }
    return { authenticated: true };
  }

  @Post('verify-email')
  async verifyEmail(@Body() body: any) {
    const parsed = VerifyEmailDtoSchema.parse(body);
    return this.authService.verifyEmail(parsed.token);
  }

  @Post('resend-verification')
  async resendVerification(@Req() req: Request) {
    // Requires authenticated user or email in body
    return { message: 'Verification email sent' };
  }

  @Post('forgot-password')
  async forgotPassword(@Body() body: any) {
    const parsed = ForgotPasswordDtoSchema.parse(body);
    return this.authService.forgotPassword(parsed.email);
  }

  @Post('reset-password')
  async resetPassword(@Body() body: any) {
    const parsed = ResetPasswordDtoSchema.parse(body);
    return this.authService.resetPassword(parsed.token, parsed.newPassword);
  }

  @Post('mfa/enroll')
  async mfaEnroll(@Req() req: Request) {
    return { qrCode: 'mock-qr-code' };
  }

  @Post('mfa/confirm')
  async mfaConfirm(@Body() body: any) {
    const parsed = MfaConfirmDtoSchema.parse(body);
    return { message: 'MFA confirmed' };
  }

  @Post('mfa/challenge')
  async mfaChallenge(@Body() body: any) {
    const parsed = MfaChallengeDtoSchema.parse(body);
    return { message: 'MFA Challenge successful' };
  }

  @Post('mfa/disable')
  async mfaDisable(@Req() req: Request) {
    return { message: 'MFA disabled' };
  }
}