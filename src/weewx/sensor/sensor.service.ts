import {Injectable} from '@nestjs/common';
import {SensorEntity} from '../entities';
import {ServiceBase} from '../base.service';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';

@Injectable()
export class SensorService extends ServiceBase<SensorEntity> {

    constructor(
        @InjectRepository(SensorEntity)
        protected repository: Repository<SensorEntity>
    ) {
        super(repository);
    }
}
