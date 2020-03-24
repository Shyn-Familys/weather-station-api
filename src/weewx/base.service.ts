import {MoreThanOrEqual, Repository} from 'typeorm';
import * as moment from 'moment-timezone';
import {ArchiveBaseEntity} from './entities/archiveBase.entity';

export abstract class ServiceBase<Entity extends ArchiveBaseEntity> {

    protected constructor(
        protected readonly repository: Repository<Entity>
    ) {
    }

    async getToday(): Promise<Entity[]> {
        return await this.repository.find({
            where: {
                dateTime: MoreThanOrEqual(moment().tz(process.env.STATION_TIMEZONE).startOf('day').unix())
            },
            order: {
                dateTime: 'ASC'
            }
        });
    }
}
