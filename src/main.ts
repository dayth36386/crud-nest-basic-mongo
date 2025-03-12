import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { BadRequestException, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
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
