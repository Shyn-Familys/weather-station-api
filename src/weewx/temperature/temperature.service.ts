import {Injectable} from '@nestjs/common';
import {TemperatureEntity} from '../entities';
import {ServiceBase} from '../base.service';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';

@Injectable()
export class TemperatureService extends ServiceBase<TemperatureEntity> {

    constructor(
        @InjectRepository(TemperatureEntity)
        protected repository: Repository<TemperatureEntity>
    ) {
        super(repository);
    }
}
