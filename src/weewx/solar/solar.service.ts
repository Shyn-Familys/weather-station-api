import {Injectable} from '@nestjs/common';
import {SolarEntity} from '../entities';
import {ServiceBase} from '../base.service';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';

@Injectable()
export class SolarService extends ServiceBase<SolarEntity> {

    constructor(
        @InjectRepository(SolarEntity)
        protected repository: Repository<SolarEntity>
    ) {
        super(repository);
    }
}
