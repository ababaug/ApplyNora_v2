import { z } from 'zod';

const envSchema = z.object({
  PORT: z.coerce.number().default(3000),
  POSTGRES_USER: z.string().default('applynora'),
  POSTGRES_PASSWORD: z.string().default('password'),
  POSTGRES_DB: z.string().default('applynora'),
  REDIS_HOST: z.string().default('localhost'),
  REDIS_PORT: z.coerce.number().default(6379),
});

const _env = envSchema.safeParse(process.env);

if (!_env.success) {
  console.error('❌ Invalid environment variables', _env.error.format());
  process.exit(1);
}

export const env = _env.data;
