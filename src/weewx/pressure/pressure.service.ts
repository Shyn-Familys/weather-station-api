import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {ServiceBase} from '../base.service';
import {PressureEntity} from '../entities';

@Injectable()
export class PressureService extends ServiceBase<PressureEntity> {

    constructor(
        @InjectRepository(PressureEntity)
        protected repository: Repository<PressureEntity>
    ) {
        super(repository);
    }
}
