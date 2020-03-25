import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {Entities} from './entities';
import {controllers, services} from './';
import {ConfigModule} from '@nestjs/config';
import * as moment from 'moment-timezone';

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
