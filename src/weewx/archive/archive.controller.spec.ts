import {Test, TestingModule} from '@nestjs/testing';
import {ArchiveController} from './archive.controller';
import {ArchiveService} from './archive.service';

describe('Archive Controller', () => {
    let controller: ArchiveController;
    let serviceMock: Partial<ArchiveService>;

    beforeEach(async () => {
        serviceMock = {};

        const module: TestingModule = await Test.createTestingModule({
            controllers: [
                ArchiveController
            ],
            providers: [{
                provide: ArchiveService,
                useValue: serviceMock
            }]
        }).compile();

        controller = module.get<ArchiveController>(ArchiveController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();

    });
});
