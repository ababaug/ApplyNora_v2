import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import { env } from './env.js';
import cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.use(cookieParser());
  app.enableCors({
    origin: true,
    credentials: true,
  });
  await app.listen(env.PORT);
}
await bootstrap();
