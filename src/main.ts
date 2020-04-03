import {ClassSerializerInterceptor, INestApplication, ValidationPipe} from '@nestjs/common';
import {NestFactory, Reflector} from '@nestjs/core';
import {FastifyAdapter, NestFastifyApplication} from '@nestjs/platform-fastify';
import {DocumentBuilder, SwaggerModule} from '@nestjs/swagger';
import * as compression from 'compression';
import * as rateLimit from 'express-rate-limit';
import * as helmet from 'helmet';
import * as nocache from 'nocache';
import {AppModule} from './app.module';

function setupDocumentation(app: INestApplication) {
    const options = new DocumentBuilder();
    options.setTitle('Weather Station API');
    options.setDescription('REST API for a WeeWX database');

    const document = SwaggerModule.createDocument(app, options.build());

    SwaggerModule.setup('api', app, document);
}

function setupSecurity(app: INestApplication) {
    app.use(helmet());
    app.enableCors();
    app.use(rateLimit({
        windowMs: 15 * 60 * 1000, // 15 minutes
        max: 100, // limit each IP to 100 requests per windowMs
    }));
    app.use(nocache());
}

async function bootstrap() {
    const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter());

    setupSecurity(app);
    app.use(compression());
    app.setGlobalPrefix(process.env.URL_PREFIX);
    app.useGlobalPipes(new ValidationPipe());

    const reflector = app.get(Reflector);
    app.useGlobalInterceptors(new ClassSerializerInterceptor(reflector));

    setupDocumentation(app);

    await app.listen(Number.parseInt(process.env.SERVER_PORT), '0.0.0.0');
}

bootstrap();
