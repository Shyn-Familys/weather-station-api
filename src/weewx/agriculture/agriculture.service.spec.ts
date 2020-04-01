import {Test, TestingModule} from '@nestjs/testing';
import {getRepositoryToken} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {AgricultureEntity} from '../entities';
import {AgricultureService} from './agriculture.service';

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
