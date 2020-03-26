import {Test, TestingModule} from '@nestjs/testing';
import {SolarController} from './solar.controller';
import {SolarService} from './solar.service';

describe('Solar Controller', () => {
    let controller: SolarController;
    let serviceMock: Partial<SolarService>;

    beforeEach(async () => {
        serviceMock = {};

        const module: TestingModule = await Test.createTestingModule({
            controllers: [SolarController],
            providers: [{
                provide: SolarService,
                useValue: serviceMock
            }]
        }).compile();

        controller = module.get<SolarController>(SolarController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
