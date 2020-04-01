import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {ServiceBase} from '../base.service';
import {InsideEntity} from '../entities';

@Injectable()
export class InsideService extends ServiceBase<InsideEntity> {

    constructor(
        @InjectRepository(InsideEntity)
        protected repository: Repository<InsideEntity>
    ) {
        super(repository);
    }
}
