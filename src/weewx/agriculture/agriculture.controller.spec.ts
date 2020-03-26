import {Test, TestingModule} from '@nestjs/testing';
import {AgricultureController} from './agriculture.controller';
import {AgricultureService} from './agriculture.service';

describe('Agriculture Controller', () => {
    let controller: AgricultureController;
    let serviceMock: Partial<AgricultureService>;

    beforeEach(async () => {
        serviceMock = {};

        const module: TestingModule = await Test.createTestingModule({
            controllers: [
                AgricultureController
            ],
            providers: [{
                provide: AgricultureService,
                useValue: serviceMock
            }]
        }).compile();

        controller = module.get<AgricultureController>(AgricultureController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();

    });
});
