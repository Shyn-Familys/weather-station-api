import {Test, TestingModule} from '@nestjs/testing';
import {TemperatureController} from './temperature.controller';
import {TemperatureService} from './temperature.service';

describe('Temperature Controller', () => {
    let controller: TemperatureController;
    let serviceMock: Partial<TemperatureService>;

    beforeEach(async () => {
        serviceMock = {};

        const module: TestingModule = await Test.createTestingModule({
            controllers: [TemperatureController],
            providers: [{
                provide: TemperatureService,
                useValue: serviceMock
            }]
        }).compile();

        controller = module.get<TemperatureController>(TemperatureController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
