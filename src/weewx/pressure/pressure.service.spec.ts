import {Test, TestingModule} from '@nestjs/testing';
import {PressureService} from './pressure.service';
import {getRepositoryToken} from '@nestjs/typeorm';
import {PressureEntity} from '../entities';
import {Repository} from 'typeorm';

describe('Pressure Service', () => {
    let service: PressureService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                PressureService,
                {
                    provide: getRepositoryToken(PressureEntity),
                    useClass: Repository
                }
            ],
        }).compile();

        service = module.get<PressureService>(PressureService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
