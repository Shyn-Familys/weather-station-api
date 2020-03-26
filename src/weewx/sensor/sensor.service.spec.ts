import {Test, TestingModule} from '@nestjs/testing';
import {SensorService} from './sensor.service';
import {getRepositoryToken} from '@nestjs/typeorm';
import {SensorEntity} from '../entities';
import {Repository} from 'typeorm';

describe('Sensor Service', () => {
    let service: SensorService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                SensorService,
                {
                    provide: getRepositoryToken(SensorEntity),
                    useClass: Repository
                }
            ],
        }).compile();

        service = module.get<SensorService>(SensorService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
