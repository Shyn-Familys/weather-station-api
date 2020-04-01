import {Test, TestingModule} from '@nestjs/testing';
import {getRepositoryToken} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {PressureEntity} from '../entities';
import {PressureService} from './pressure.service';

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
