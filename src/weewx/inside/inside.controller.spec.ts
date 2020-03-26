import {Test, TestingModule} from '@nestjs/testing';
import {InsideController} from './inside.controller';
import {InsideService} from './inside.service';

describe('Inside Controller', () => {
    let controller: InsideController;
    let serviceMock: Partial<InsideService>;

    beforeEach(async () => {
        serviceMock = {};

        const module: TestingModule = await Test.createTestingModule({
            controllers: [InsideController],
            providers: [{
                provide: InsideService,
                useValue: serviceMock
            }]
        }).compile();

        controller = module.get<InsideController>(InsideController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
