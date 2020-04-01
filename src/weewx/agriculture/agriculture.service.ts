import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {ServiceBase} from '../base.service';
import {AgricultureEntity} from '../entities';

@Injectable()
export class AgricultureService extends ServiceBase<AgricultureEntity> {

    constructor(
        @InjectRepository(AgricultureEntity)
        protected repository: Repository<AgricultureEntity>
    ) {
        super(repository);
    }
}
