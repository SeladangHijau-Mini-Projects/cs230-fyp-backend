import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ResponseInterceptor } from './common/interceptor/response.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalInterceptors(new ResponseInterceptor());
  app.enableCors();

  await app.listen(process.env.PORT || 3000, process.env.HOST || '127.0.0.1');
}
bootstrap();
