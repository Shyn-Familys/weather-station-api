import {Injectable} from '@nestjs/common';
import {HumidityEntity} from '../entities';
import {ServiceBase} from '../base.service';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';

@Injectable()
export class HumidityService extends ServiceBase<HumidityEntity> {

    constructor(
        @InjectRepository(HumidityEntity)
        protected repository: Repository<HumidityEntity>
    ) {
        super(repository);
    }
}
