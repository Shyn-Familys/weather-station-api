import {Get} from '@nestjs/common';
import {ServiceBase} from './base.service';
import {ArchiveBaseEntity} from './entities/archiveBase.entity';

export class ControllerBase<Service extends ServiceBase<ArchiveBaseEntity>> {

    constructor(protected service: Service) {
    }

    @Get()
    async getToday(): Promise<ArchiveBaseEntity[]> {
        return await this.service.getToday();
    }
}
