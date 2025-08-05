import { NestFactory } from '@nestjs/core';
import { ValidationPipe, RequestMethod } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // Configurar archivos estáticos
  app.useStaticAssets(join(__dirname, '..', 'public'), {
    index: false, // No servir index.html automáticamente para rutas de API
  });

  // Enable global validation pipes
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  // Enable CORS for cross-origin requests
  app.enableCors();

  // Set global prefix for all routes (except HomeController and AppController root)
  app.setGlobalPrefix('api', {
    exclude: [
      { path: '', method: RequestMethod.GET },
      { path: 'logs', method: RequestMethod.GET },
      { path: 'health', method: RequestMethod.GET },
    ],
  });

  // Swagger/OpenAPI configuration
  const config = new DocumentBuilder()
    .setTitle('Data Log API')
    .setDescription(
      'NestJS API for storing and retrieving text data with PostgreSQL database',
    )
    .setVersion('1.0')
    .setContact(
      'Developer',
      'https://data-log.nexa-code.net',
      'contact@nexa-code.net',
    )
    .setLicense('MIT', 'https://opensource.org/licenses/MIT')
    .addServer('https://data-log.nexa-code.net', 'Production server')
    .addServer('http://localhost:3000', 'Development server')
    .addTag('text-logs', 'Operations about text logs')
    .addTag('health', 'Health check operations')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document, {
    customSiteTitle: 'Data Log API Documentation',
    customfavIcon: 'https://nestjs.com/img/logo-small.svg',
    customCss: '.swagger-ui .topbar { background-color: #e10098; }',
    swaggerOptions: {
      persistAuthorization: true,
      displayRequestDuration: true,
    },
  });

  const port = process.env.PORT || 3000;
  await app.listen(port, '0.0.0.0');
  console.log(`🚀 Application is running on: http://localhost:${port}/api`);
  console.log(
    `🏥 Health check available at: http://localhost:${port}/api/health`,
  );
  console.log(
    `📖 Swagger documentation available at: http://localhost:${port}/api/docs`,
  );
}

bootstrap().catch((error) => {
  console.error('❌ Error starting application:', error);
  process.exit(1);
});
