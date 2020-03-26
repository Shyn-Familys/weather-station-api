import {Test, TestingModule} from '@nestjs/testing';
import {PrecipitationService} from './precipitation.service';
import {getRepositoryToken} from '@nestjs/typeorm';
import {PrecipitationEntity} from '../entities';
import {Repository} from 'typeorm';

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
