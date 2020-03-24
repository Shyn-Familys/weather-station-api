import {Test, TestingModule} from '@nestjs/testing';
import {PrecipitationController} from './precipitation.controller';

describe('PressureEntity Controller', () => {
    let controller: PrecipitationController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [PrecipitationController],
        }).compile();

        controller = module.get<PrecipitationController>(PrecipitationController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
