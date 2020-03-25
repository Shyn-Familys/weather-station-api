// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {Get, Query} from '@nestjs/common';
import {ServiceBase} from './base.service';
import {ArchiveBaseEntity} from './entities/archiveBase.entity';
import {Pagination} from 'nestjs-typeorm-paginate';
import {PATH_METADATA} from '@nestjs/common/constants';
import * as Path from 'path';

export class ControllerBase<Service extends ServiceBase<ArchiveBaseEntity>> {

    protected static MAX_RECORDS = 100;

    constructor(protected service: Service, private path: string) {
    }

    @Get()
    async getToday(
        @Query('page') page = 0,
        @Query('limit') limit = ControllerBase.MAX_RECORDS
    ): Promise<Pagination<ArchiveBaseEntity>> {
        const route = this.buildRoute(this.getToday);
        return await this.service.getToday({
            page: page,
            limit: limit,
            route: route
        });
    }

    @Get('yesterday')
    async getYesterday(
        @Query('page') page = 0,
        @Query('limit') limit = ControllerBase.MAX_RECORDS
    ): Promise<Pagination<ArchiveBaseEntity>> {
        const route = this.buildRoute(this.getYesterday);
        return await this.service.getYesterday({
            page: page,
            limit: limit,
            route: route
        });
    }

    @Get('week')
    async getWeek(
        @Query('page') page = 0,
        @Query('limit') limit = ControllerBase.MAX_RECORDS
    ): Promise<Pagination<ArchiveBaseEntity>> {
        const route = this.buildRoute(this.getWeek);
        return await this.service.getThisWeek({
            page: page,
            limit: limit,
            route: route
        });
    }

    @Get('month')
    async getMonth(
        @Query('page') page = 0,
        @Query('limit') limit = ControllerBase.MAX_RECORDS
    ): Promise<Pagination<ArchiveBaseEntity>> {
        const route = this.buildRoute(this.getMonth);
        return await this.service.getThisMonth({
            page: page,
            limit: limit,
            route: route
        });
    }

    @Get('quarter')
    async getQuarter(
        @Query('page') page = 0,
        @Query('limit') limit = ControllerBase.MAX_RECORDS
    ): Promise<Pagination<ArchiveBaseEntity>> {
        const route = this.buildRoute(this.getQuarter);
        return await this.service.getThisQuarter({
            page: page,
            limit: limit,
            route: route
        });
    }

    @Get('year')
    async getYear(
        @Query('page') page = 0,
        @Query('limit') limit = ControllerBase.MAX_RECORDS
    ): Promise<Pagination<ArchiveBaseEntity>> {
        const route = this.buildRoute(this.getYear);
        return await this.service.getThisYear({
            page: page,
            limit: limit,
            route: route
        });
    }

    private buildRoute(fn: Function): string {
        return Path.join(process.env.URL_PREFIX, this.path, Reflect.getMetadata(PATH_METADATA, fn));
    }
}
