import {Test, TestingModule} from '@nestjs/testing';
import {PrecipitationController} from './precipitation.controller';
import {PrecipitationService} from './precipitation.service';

describe('Precipitation Controller', () => {
    let controller: PrecipitationController;
    let serviceMock: Partial<PrecipitationService>;

    beforeEach(async () => {
        serviceMock = {};

        const module: TestingModule = await Test.createTestingModule({
            controllers: [PrecipitationController],
            providers: [{
                provide: PrecipitationService,
                useValue: serviceMock
            }]
        }).compile();

        controller = module.get<PrecipitationController>(PrecipitationController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
