import {Module} from '@nestjs/common';
import {ConfigModule} from '@nestjs/config';
import {TypeOrmModule} from '@nestjs/typeorm';
import * as moment from 'moment-timezone';
import {controllers, services} from './';
import {Entities} from './entities';

@Module({
    imports: [
        ConfigModule.forRoot(),
        TypeOrmModule.forRoot({
            type: 'sqlite',
            database: process.env.DATABASE_FILE,
            migrationsRun: false,
            autoLoadEntities: true,
            synchronize: false
        }),
        TypeOrmModule.forFeature([...Entities])
    ],
    controllers: [...controllers],
    providers: [...services],
})
export class WeewxModule {

    constructor() {
        if (!process.env.STATION_TIMEZONE) {
            process.env.STATION_TIMEZONE = 'UTC';
        }

        if (!process.env.DATA_TIMEZONE) {
            process.env.DATA_TIMEZONE = 'UTC';
        }

        moment.tz.setDefault(process.env.DATA_TIMEZONE);
    }
}
