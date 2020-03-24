import {Between, FindConditions, MoreThanOrEqual, Repository} from 'typeorm';
import * as moment from 'moment-timezone';
import {ArchiveBaseEntity} from './entities/archiveBase.entity';
import {IPaginationOptions, paginate, Pagination} from 'nestjs-typeorm-paginate';

export abstract class ServiceBase<Entity extends ArchiveBaseEntity> {

    protected constructor(
        protected readonly repository: Repository<Entity>
    ) {
    }

    private static getRange(from: number, to?: number): FindConditions<object> {
        return {
            where: {
                dateTime: to ? Between(from, to) : MoreThanOrEqual(from)
            },
            order: {
                dateTime: 'ASC'
            }
        };
    }

    async getToday(options: IPaginationOptions): Promise<Pagination<Entity>> {
        const query = ServiceBase.getRange(moment().tz(process.env.STATION_TIMEZONE).startOf('day').unix());
        return await paginate(this.repository, options, query);
    }

    async getYesterday(options: IPaginationOptions): Promise<Pagination<Entity>> {
        const startDate: number = moment().tz(process.env.STATION_TIMEZONE).startOf('day').subtract(1, 'days').unix();
        const endDate: number = moment().tz(process.env.STATION_TIMEZONE).startOf('day').unix();
        const query = ServiceBase.getRange(startDate, endDate);
        return await paginate(this.repository, options, query);
    }

    async getThisWeek(options: IPaginationOptions): Promise<Pagination<Entity>> {
        const query = ServiceBase.getRange(moment().tz(process.env.STATION_TIMEZONE).startOf('week').unix());
        return await paginate(this.repository, options, query);
    }

    async getThisMonth(options: IPaginationOptions): Promise<Pagination<Entity>> {
        const query = ServiceBase.getRange(moment().tz(process.env.STATION_TIMEZONE).startOf('month').unix());
        return await paginate(this.repository, options, query);
    }

    async getThisQuarter(options: IPaginationOptions): Promise<Pagination<Entity>> {
        const query = ServiceBase.getRange(moment().tz(process.env.STATION_TIMEZONE).startOf('quarter').unix());
        return await paginate(this.repository, options, query);
    }

    async getThisYear(options: IPaginationOptions): Promise<Pagination<Entity>> {
        const query = ServiceBase.getRange(moment().tz(process.env.STATION_TIMEZONE).startOf('year').unix());
        return await paginate(this.repository, options, query);
    }
}
