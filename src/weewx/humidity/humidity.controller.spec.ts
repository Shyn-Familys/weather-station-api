import {Test, TestingModule} from '@nestjs/testing';
import {HumidityController} from './humidity.controller';
import {HumidityService} from './humidity.service';

describe('Humidity Controller', () => {
    let controller: HumidityController;
    let serviceMock: Partial<HumidityService>;

    beforeEach(async () => {
        serviceMock = {};

        const module: TestingModule = await Test.createTestingModule({
            controllers: [HumidityController],
            providers: [{
                provide: HumidityService,
                useValue: serviceMock
            }]
        }).compile();

        controller = module.get<HumidityController>(HumidityController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
