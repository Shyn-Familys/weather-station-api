import {Test, TestingModule} from '@nestjs/testing';
import {SensorController} from './sensor.controller';
import {SensorService} from './sensor.service';

describe('Sensor Controller', () => {
    let controller: SensorController;
    let serviceMock: Partial<SensorService>;

    beforeEach(async () => {
        serviceMock = {};

        const module: TestingModule = await Test.createTestingModule({
            controllers: [SensorController],
            providers: [{
                provide: SensorService,
                useValue: serviceMock
            }]
        }).compile();

        controller = module.get<SensorController>(SensorController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
