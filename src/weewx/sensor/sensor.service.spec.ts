import {Test, TestingModule} from '@nestjs/testing';
import {getRepositoryToken} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {SensorEntity} from '../entities';
import {SensorService} from './sensor.service';

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
