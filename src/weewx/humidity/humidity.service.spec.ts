import {Test, TestingModule} from '@nestjs/testing';
import {HumidityService} from './humidity.service';

describe('PressureService', () => {
    let service: HumidityService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [HumidityService],
        }).compile();

        service = module.get<HumidityService>(HumidityService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
