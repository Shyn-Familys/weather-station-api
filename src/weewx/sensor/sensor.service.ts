import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {ServiceBase} from '../base.service';
import {SensorEntity} from '../entities';

@Injectable()
export class SensorService extends ServiceBase<SensorEntity> {

    constructor(
        @InjectRepository(SensorEntity)
        protected repository: Repository<SensorEntity>
    ) {
        super(repository);
    }
}
