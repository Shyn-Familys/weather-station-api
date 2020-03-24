import {NestFactory, Reflector} from '@nestjs/core';
import {AppModule} from './app.module';
import {ClassSerializerInterceptor} from '@nestjs/common';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.setGlobalPrefix('api/v1');
    const reflector = app.get(Reflector);
    app.useGlobalInterceptors(new ClassSerializerInterceptor(reflector));
    await app.listen(3000);
}

bootstrap();
