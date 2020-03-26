import {Test, TestingModule} from '@nestjs/testing';
import {TemperatureService} from './temperature.service';
import {getRepositoryToken} from '@nestjs/typeorm';
import {TemperatureEntity} from '../entities';
import {Repository} from 'typeorm';

describe('Temperature Service', () => {
    let service: TemperatureService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                TemperatureService,
                {
                    provide: getRepositoryToken(TemperatureEntity),
                    useClass: Repository
                }
            ],
        }).compile();

        service = module.get<TemperatureService>(TemperatureService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
