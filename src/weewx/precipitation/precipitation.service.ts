import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {ServiceBase} from '../base.service';
import {PrecipitationEntity} from '../entities';

@Injectable()
export class PrecipitationService extends ServiceBase<PrecipitationEntity> {

    constructor(
        @InjectRepository(PrecipitationEntity)
        protected repository: Repository<PrecipitationEntity>
    ) {
        super(repository);
    }
}
