import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {ServiceBase} from '../base.service';
import {HumidityEntity} from '../entities';

@Injectable()
export class HumidityService extends ServiceBase<HumidityEntity> {

    constructor(
        @InjectRepository(HumidityEntity)
        protected repository: Repository<HumidityEntity>
    ) {
        super(repository);
    }
}
