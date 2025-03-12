import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('NestJS API Basic')
    .setDescription('The NestJS API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  // app.useGlobalPipes(
  //   new ValidationPipe({
  //     exceptionFactory: (errors) => {
  //       const messages = errors.map((error) => {
  //         return {
  //           property: error.property,
  //           constraints: error.constraints,
  //         };
  //       });
  //       throw new BadRequestException({
  //         message: 'Input data validation failed',
  //         errors: messages,
  //       });
  //     },
  //   }),
  // );
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
