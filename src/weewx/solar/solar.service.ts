import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {ServiceBase} from '../base.service';
import {SolarEntity} from '../entities';

@Injectable()
export class SolarService extends ServiceBase<SolarEntity> {

    constructor(
        @InjectRepository(SolarEntity)
        protected repository: Repository<SolarEntity>
    ) {
        super(repository);
    }
}
