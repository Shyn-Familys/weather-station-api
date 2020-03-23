import { Module } from '@nestjs/common';
import { WeewxModule } from './weewx/weewx.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Archive } from './weewx/entities/Archive';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'sqlite',
            database: './db/weewx.sdb',
            migrationsRun: false,
            autoLoadEntities: true,
            synchronize: false
        }),
        WeewxModule
    ],
    controllers: [],
    providers: [],
})
export class AppModule {
}
