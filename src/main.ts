import {ClassSerializerInterceptor} from '@nestjs/common';
import {NestFactory, Reflector} from '@nestjs/core';
import {FastifyAdapter, NestFastifyApplication} from '@nestjs/platform-fastify';
import * as compression from 'compression';
import {AppModule} from './app.module';

async function bootstrap() {
    const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter());
    app.enableCors();
    app.use(compression());
    app.setGlobalPrefix(process.env.URL_PREFIX);
    const reflector = app.get(Reflector);
    app.useGlobalInterceptors(new ClassSerializerInterceptor(reflector));

    await app.listen(Number.parseInt(process.env.SERVER_PORT), '0.0.0.0');
}

bootstrap();
