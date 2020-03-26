import {Test, TestingModule} from '@nestjs/testing';
import {InsideService} from './inside.service';
import {getRepositoryToken} from '@nestjs/typeorm';
import {InsideEntity} from '../entities';
import {Repository} from 'typeorm';

describe('Inside Service', () => {
    let service: InsideService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                InsideService,
                {
                    provide: getRepositoryToken(InsideEntity),
                    useClass: Repository
                }
            ],
        }).compile();

        service = module.get<InsideService>(InsideService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
