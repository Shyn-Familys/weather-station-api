import * as moment from 'moment-timezone';
import {IPaginationOptions, paginate, Pagination} from 'nestjs-typeorm-paginate';
import {Repository} from 'typeorm';
import {SelectQueryBuilder} from 'typeorm/query-builder/SelectQueryBuilder';
import {ArchiveBaseEntity} from './entities/archiveBase.entity';

export abstract class ServiceBase<Entity extends ArchiveBaseEntity> {

    protected constructor(
        protected readonly repository: Repository<Entity>
    ) {
    }

    async getToday(options: IPaginationOptions): Promise<Pagination<Entity>> {
        const query = this.getRangeQuery(moment().tz(process.env.STATION_TIMEZONE).startOf('day').unix());
        return await paginate(query, options);
    }

    async getSince(startTime: number, options: IPaginationOptions): Promise<Pagination<Entity>> {
        const query = this.getSinceQuery(moment(startTime).tz(process.env.STATION_TIMEZONE).unix());
        return await paginate(query, options);
    }

    async getLast24Hours(options: IPaginationOptions): Promise<Pagination<Entity>> {
        const query = this.getRangeQuery(moment().tz(process.env.STATION_TIMEZONE).subtract(1, 'day').unix());
        return await paginate(query, options);
    }

    async getYesterday(options: IPaginationOptions): Promise<Pagination<Entity>> {
        const endDate = moment().tz(process.env.STATION_TIMEZONE).startOf('day');
        const startDate = moment(endDate).subtract(1, 'days');

        const query = this.getRangeQuery(startDate.unix(), endDate.unix());
        return await paginate(query, options);
    }

    async getThisWeek(options: IPaginationOptions): Promise<Pagination<Entity>> {
        const query = this.getRangeQuery(moment().tz(process.env.STATION_TIMEZONE).startOf('week').unix());
        return await paginate(query, options);
    }

    async getThisMonth(options: IPaginationOptions): Promise<Pagination<Entity>> {
        const query = this.getRangeQuery(moment().tz(process.env.STATION_TIMEZONE).startOf('month').unix());
        return await paginate(query, options);
    }

    async getThisQuarter(options: IPaginationOptions): Promise<Pagination<Entity>> {
        const query = this.getRangeQuery(moment().tz(process.env.STATION_TIMEZONE).startOf('quarter').unix());
        return await paginate(query, options);
    }

    async getThisYear(options: IPaginationOptions): Promise<Pagination<Entity>> {
        const query = this.getRangeQuery(moment().tz(process.env.STATION_TIMEZONE).startOf('year').unix());
        return await paginate(query, options);
    }

    private getSinceQuery(from: number): SelectQueryBuilder<Entity> {
        const query = this.repository.createQueryBuilder('a');
        query.where('a.dateTime > :from', {from});
        query.orderBy('a.dateTime', 'ASC');

        return query;
    }

    private getRangeQuery(from: number, to?: number): SelectQueryBuilder<Entity> {
        const query = this.repository.createQueryBuilder('a');
        if (to) {
            query.where('a.dateTime between :from and :to', {from, to});
        } else {
            query.where('a.dateTime >= :from', {from});
        }

        return query.orderBy('dateTime', 'ASC');
    }
}
