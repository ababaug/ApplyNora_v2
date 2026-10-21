import { z } from 'zod';

export const RegisterDtoSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  confirmPassword: z.string().min(8),
}).refine(data => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

export type RegisterDto = z.infer<typeof RegisterDtoSchema>;

export const LoginDtoSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export type LoginDto = z.infer<typeof LoginDtoSchema>;

export const VerifyEmailDtoSchema = z.object({
  token: z.string()
});

export const ForgotPasswordDtoSchema = z.object({
  email: z.string().email()
});

export const ResetPasswordDtoSchema = z.object({
  token: z.string(),
  newPassword: z.string().min(8)
});

export const MfaEnrollDtoSchema = z.object({});
export const MfaConfirmDtoSchema = z.object({ token: z.string() });
export const MfaChallengeDtoSchema = z.object({ token: z.string(), sessionToken: z.string() });