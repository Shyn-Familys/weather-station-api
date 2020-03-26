import {Test, TestingModule} from '@nestjs/testing';
import {AgricultureService} from './agriculture.service';
import {getRepositoryToken} from '@nestjs/typeorm';
import {AgricultureEntity} from '../entities';
import {Repository} from 'typeorm';

describe('Agriculture Service', () => {
    let service: AgricultureService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                AgricultureService,
                {
                    provide: getRepositoryToken(AgricultureEntity),
                    useClass: Repository
                }
            ],
        }).compile();

        service = module.get<AgricultureService>(AgricultureService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
