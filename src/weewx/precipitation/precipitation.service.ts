import {Injectable} from '@nestjs/common';
import {PrecipitationEntity} from '../entities';
import {ServiceBase} from '../base.service';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';

@Injectable()
export class PrecipitationService extends ServiceBase<PrecipitationEntity> {

    constructor(
        @InjectRepository(PrecipitationEntity)
        protected repository: Repository<PrecipitationEntity>
    ) {
        super(repository);
    }
}
