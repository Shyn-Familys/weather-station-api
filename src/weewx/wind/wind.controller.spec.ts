import {Test, TestingModule} from '@nestjs/testing';
import {WindController} from './wind.controller';
import {WindService} from './wind.service';

describe('PressureEntity Controller', () => {
    let controller: WindController;
    let serviceMock: Partial<WindService>;

    beforeEach(async () => {
        serviceMock = {};

        const module: TestingModule = await Test.createTestingModule({
            controllers: [WindController],
            providers: [{
                provide: WindService,
                useValue: serviceMock
            }]
        }).compile();

        controller = module.get<WindController>(WindController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
