import {Test, TestingModule} from '@nestjs/testing';
import {getRepositoryToken} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {HumidityEntity} from '../entities';
import {HumidityService} from './humidity.service';

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
