import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {ServiceBase} from '../base.service';
import {WindEntity} from '../entities';

@Injectable()
export class WindService extends ServiceBase<WindEntity> {

    constructor(
        @InjectRepository(WindEntity)
        protected repository: Repository<WindEntity>
    ) {
        super(repository);
    }
}
