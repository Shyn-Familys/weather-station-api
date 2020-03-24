import {Injectable} from '@nestjs/common';
import {WindEntity} from '../entities';
import {ServiceBase} from '../base.service';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';

@Injectable()
export class WindService extends ServiceBase<WindEntity> {

    constructor(
        @InjectRepository(WindEntity)
        protected repository: Repository<WindEntity>
    ) {
        super(repository);
    }
}
