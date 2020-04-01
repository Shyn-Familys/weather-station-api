import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {ServiceBase} from '../base.service';
import {TemperatureEntity} from '../entities';

@Injectable()
export class TemperatureService extends ServiceBase<TemperatureEntity> {

    constructor(
        @InjectRepository(TemperatureEntity)
        protected repository: Repository<TemperatureEntity>
    ) {
        super(repository);
    }
}
