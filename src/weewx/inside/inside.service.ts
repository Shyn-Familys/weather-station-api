import {Injectable} from '@nestjs/common';
import {InsideEntity} from '../entities';
import {ServiceBase} from '../base.service';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';

@Injectable()
export class InsideService extends ServiceBase<InsideEntity> {

    constructor(
        @InjectRepository(InsideEntity)
        protected repository: Repository<InsideEntity>
    ) {
        super(repository);
    }
}
