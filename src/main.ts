import {ClassSerializerInterceptor, ValidationPipe} from '@nestjs/common';
import {NestFactory, Reflector} from '@nestjs/core';
import {FastifyAdapter, NestFastifyApplication} from '@nestjs/platform-fastify';
import * as compression from 'compression';
import * as rateLimit from 'express-rate-limit';
import * as helmet from 'helmet';
import * as nocache from 'nocache';
import {AppModule} from './app.module';

async function bootstrap() {
    const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter());
    app.use(helmet());
    app.enableCors();
    app.use(rateLimit({
        windowMs: 15 * 60 * 1000, // 15 minutes
        max: 100, // limit each IP to 100 requests per windowMs
    }));
    app.use(nocache());
    app.use(compression());
    app.setGlobalPrefix(process.env.URL_PREFIX);
    app.useGlobalPipes(
        new ValidationPipe()
    );
    const reflector = app.get(Reflector);
    app.useGlobalInterceptors(new ClassSerializerInterceptor(reflector));

    await app.listen(Number.parseInt(process.env.SERVER_PORT), '0.0.0.0');
}

bootstrap();
