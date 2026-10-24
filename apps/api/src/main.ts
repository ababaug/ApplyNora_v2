
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import { env } from './env.js';
import cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Set global API prefix
  app.setGlobalPrefix('api');

  // Enable cookie parsing
  app.use(cookieParser());

  // Configure CORS
  app.enableCors({
    origin: true,
    credentials: true,
  });

  // Start the application
  await app.listen(env.PORT);
}

await bootstrap();
