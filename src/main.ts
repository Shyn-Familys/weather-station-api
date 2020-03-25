import {NestFactory, Reflector} from '@nestjs/core';
import {AppModule} from './app.module';
import {ClassSerializerInterceptor} from '@nestjs/common';
import * as compression from 'compression';
import {FastifyAdapter, NestFastifyApplication} from '@nestjs/platform-fastify';

async function bootstrap() {
    const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter());
    app.use(compression());
    app.setGlobalPrefix(process.env.URL_PREFIX);
    const reflector = app.get(Reflector);
    app.useGlobalInterceptors(new ClassSerializerInterceptor(reflector));

    await app.listen(Number.parseInt(process.env.SERVER_PORT), '0.0.0.0');
}

bootstrap();
