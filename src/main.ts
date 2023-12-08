// main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as cors from 'cors';
import helmet from 'helmet'; // Utilisez cette syntaxe d'importation
import { HttpExceptionFilter } from './http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Middleware d'Erreurs Globales
  app.useGlobalFilters(new HttpExceptionFilter());

  // Middleware de Validation des Données
  app.useGlobalPipes(new ValidationPipe());

  // Middleware de Sécurité CORS
  app.use(cors());

  // Middleware de Protection contre XSS (Helmet)
  app.use(helmet());

  await app.listen(3000);
}
bootstrap();
