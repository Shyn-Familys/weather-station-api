import {Controller, Injectable} from '@nestjs/common';
import {PATH_METADATA} from '@nestjs/common/constants';
import {Test, TestingModule} from '@nestjs/testing';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {ControllerBase} from './base.controller';
import {ServiceBase} from './base.service';
import {ArchiveBaseEntity} from './entities/archiveBase.entity';

describe('Controller Base', () => {

    @Injectable()
    class SpecService extends ServiceBase<ArchiveBaseEntity> {
        constructor(@InjectRepository(ArchiveBaseEntity) protected repository: Repository<ArchiveBaseEntity>) {
            super(repository);
        }
    }

    @Controller('base')
    class SpecController extends ControllerBase<SpecService> {
        constructor(protected service: SpecService) {
            super(service, Reflect.getMetadata(PATH_METADATA, SpecController));
        }
    }

    let serviceMock: Partial<SpecService>;
    let service: SpecService;
    let controller: SpecController;

    process.env.URL_PREFIX = '/testing/prefix';

    beforeEach(async () => {
        serviceMock = {
            async getToday(): Promise<any> {
                return;
            },
            async getSince(): Promise<any> {
                return;
            },
            async getLast24Hours(): Promise<any> {
                return;
            },
            async getYesterday(): Promise<any> {
                return;
            },
            async getThisWeek(): Promise<any> {
                return;
            },
            async getThisMonth(): Promise<any> {
                return;
            },
            async getThisQuarter(): Promise<any> {
                return;
            },
            async getThisYear(): Promise<any> {
                return;
            }
        };

        const module: TestingModule = await Test.createTestingModule({
            controllers: [SpecController],
            providers: [{
                provide: SpecService,
                useValue: serviceMock
            }]
        }).compile();

        controller = module.get<SpecController>(SpecController);
        service = module.get<SpecService>(SpecService);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });

    const functionsToTest = [
        {controllerFnName: 'getToday', serviceFnName: 'getToday', path: ''},
        {controllerFnName: 'getSince', serviceFnName: 'getSince', params: [undefined, undefined, 1], path: '/from/1'},
        {controllerFnName: 'getLast24Hours', serviceFnName: 'getLast24Hours', path: '/last24Hours'},
        {controllerFnName: 'getYesterday', serviceFnName: 'getYesterday', path: '/yesterday'},
        {controllerFnName: 'getWeek', serviceFnName: 'getThisWeek', path: '/week'},
        {controllerFnName: 'getMonth', serviceFnName: 'getThisMonth', path: '/month'},
        {controllerFnName: 'getQuarter', serviceFnName: 'getThisQuarter', path: '/quarter'},
        {controllerFnName: 'getYear', serviceFnName: 'getThisYear', path: '/year'}
    ];

    functionsToTest.forEach((func) => {
        describe(func.controllerFnName, () => {
            it('should call service with correct parameters when none passed in', async () => {
                spyOn(service as any, func.serviceFnName);

                if (func.params) {
                    await controller[func.controllerFnName](...func.params);
                    expect(service[func.serviceFnName]).toHaveBeenCalledWith(
                        func.params[2],
                        expect.objectContaining({
                            limit: 100, page: 0, route: `${process.env.URL_PREFIX}/base${func.path}`
                        })
                    );
                } else {
                    await controller[func.controllerFnName]();
                    expect(service[func.serviceFnName]).toHaveBeenCalledWith(
                        expect.objectContaining({
                            limit: 100, page: 0, route: `${process.env.URL_PREFIX}/base${func.path}`
                        })
                    );
                }
            });
        });
    });
});
