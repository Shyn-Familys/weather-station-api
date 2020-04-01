import {Test, TestingModule} from '@nestjs/testing';
import {getRepositoryToken} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {WindEntity} from '../entities';
import {WindService} from './wind.service';

describe('Wind Service', () => {
    let service: WindService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                WindService,
                {
                    provide: getRepositoryToken(WindEntity),
                    useClass: Repository
                }
            ]
        }).compile();

        service = module.get<WindService>(WindService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
