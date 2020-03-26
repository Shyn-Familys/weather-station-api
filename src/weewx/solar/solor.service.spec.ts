import {Test, TestingModule} from '@nestjs/testing';
import {SolarService} from './solar.service';
import {getRepositoryToken} from '@nestjs/typeorm';
import {SolarEntity} from '../entities';
import {Repository} from 'typeorm';

describe('Solar Service', () => {
    let service: SolarService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                SolarService,
                {
                    provide: getRepositoryToken(SolarEntity),
                    useClass: Repository
                }
            ],
        }).compile();

        service = module.get<SolarService>(SolarService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
