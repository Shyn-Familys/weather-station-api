import {Test, TestingModule} from '@nestjs/testing';
import {HumidityService} from './humidity.service';
import {getRepositoryToken} from '@nestjs/typeorm';
import {HumidityEntity} from '../entities';
import {Repository} from 'typeorm';

describe('Humidity Service', () => {
    let service: HumidityService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                HumidityService,
                {
                    provide: getRepositoryToken(HumidityEntity),
                    useClass: Repository
                }
            ],
        }).compile();

        service = module.get<HumidityService>(HumidityService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
