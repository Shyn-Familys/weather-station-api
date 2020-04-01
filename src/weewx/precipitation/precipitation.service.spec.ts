import {Test, TestingModule} from '@nestjs/testing';
import {getRepositoryToken} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {PrecipitationEntity} from '../entities';
import {PrecipitationService} from './precipitation.service';

describe('Precipitation Service', () => {
    let service: PrecipitationService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                PrecipitationService,
                {
                    provide: getRepositoryToken(PrecipitationEntity),
                    useClass: Repository
                }
            ],
        }).compile();

        service = module.get<PrecipitationService>(PrecipitationService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
