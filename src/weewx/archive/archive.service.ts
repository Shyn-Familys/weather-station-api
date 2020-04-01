import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {ServiceBase} from '../base.service';
import {ArchiveEntity} from '../entities/archive.entity';

@Injectable()
export class ArchiveService extends ServiceBase<ArchiveEntity> {

    constructor(
        @InjectRepository(ArchiveEntity)
        protected repository: Repository<ArchiveEntity>
    ) {
        super(repository);
    }
}
