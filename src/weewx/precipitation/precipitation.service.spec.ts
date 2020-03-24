import {Test, TestingModule} from '@nestjs/testing';
import {PrecipitationService} from './precipitation.service';

describe('PressureService', () => {
    let service: PrecipitationService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [PrecipitationService],
        }).compile();

        service = module.get<PrecipitationService>(PrecipitationService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
