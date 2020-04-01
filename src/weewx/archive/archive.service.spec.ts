import {Test, TestingModule} from '@nestjs/testing';
import {getRepositoryToken} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {ArchiveEntity} from '../entities/archive.entity';
import {ArchiveService} from './archive.service';

describe('Archive Service', () => {
    let service: ArchiveService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                ArchiveService,
                {
                    provide: getRepositoryToken(ArchiveEntity),
                    useClass: Repository
                }
            ],
        }).compile();

        service = module.get<ArchiveService>(ArchiveService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
