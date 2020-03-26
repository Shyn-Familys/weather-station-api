import {Test, TestingModule} from '@nestjs/testing';
import {PressureController} from './pressure.controller';
import {PressureService} from './pressure.service';

describe('Pressure Controller', () => {
    let controller: PressureController;
    let serviceMock: Partial<PressureService>;

    beforeEach(async () => {
        serviceMock = {};

        const module: TestingModule = await Test.createTestingModule({
            controllers: [PressureController],
            providers: [{
                provide: PressureService,
                useValue: serviceMock
            }]
        }).compile();

        controller = module.get<PressureController>(PressureController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
