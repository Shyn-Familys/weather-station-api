import {Injectable} from '@nestjs/common';
import {PressureEntity} from '../entities';
import {ServiceBase} from '../base.service';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';

@Injectable()
export class PressureService extends ServiceBase<PressureEntity> {

    constructor(
        @InjectRepository(PressureEntity)
        protected repository: Repository<PressureEntity>
    ) {
        super(repository);
    }
}
