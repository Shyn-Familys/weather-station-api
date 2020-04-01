import {Injectable} from '@nestjs/common';
import {Test, TestingModule} from '@nestjs/testing';
import {getRepositoryToken, InjectRepository} from '@nestjs/typeorm';
import * as moment from 'moment-timezone';
import * as nestjsTypeormPaginate from 'nestjs-typeorm-paginate';
import {Repository} from 'typeorm';
import {ServiceBase} from './base.service';
import {ArchiveBaseEntity} from './entities/archiveBase.entity';

describe('Service Base', () => {

    @Injectable()
    class ServiceBaseSpec extends ServiceBase<ArchiveBaseEntity> {
        constructor(@InjectRepository(ArchiveBaseEntity) protected repository: Repository<ArchiveBaseEntity>) {
            super(repository);
        }
    }

    let service: ServiceBaseSpec;

    process.env.STATION_TIMEZONE = 'UTC';

    beforeEach(async () => {

        const repositoryMock = jest.fn(() => ({
            createQueryBuilder: jest.fn(() => ({
                where: jest.fn().mockReturnThis(),
                orderBy: jest.fn().mockReturnThis(),
            })),
        }))();

        const module: TestingModule = await Test.createTestingModule({
            providers: [
                ServiceBaseSpec,
                {
                    provide: getRepositoryToken(ArchiveBaseEntity),
                    useValue: repositoryMock,
                }
            ]
        }).compile();

        service = module.get<ServiceBaseSpec>(ServiceBaseSpec);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    describe('getToday', () => {
        it('should ask for only the results for today', async () => {
            spyOn(nestjsTypeormPaginate, 'paginate').and.returnValue([]);

            await service.getToday({limit: 10, page: 1, route: 'testing/route'});

            expect(nestjsTypeormPaginate.paginate).toHaveBeenCalledWith(
                expect.objectContaining({
                    where: expect.any(Function),
                    orderBy: expect.any(Function)
                }),
                expect.objectContaining({
                    limit: 10, page: 1, route: 'testing/route'
                })
            );
            expect(nestjsTypeormPaginate.paginate).toHaveBeenCalled();
        });
    });

    describe('getSince', () => {
        it('should ask for only the results for a point in time', async () => {
            const expectedTime = moment().tz('UTC').valueOf();
            spyOn(nestjsTypeormPaginate, 'paginate').and.returnValue([]);

            await service.getSince(expectedTime, {limit: 10, page: 1, route: 'testing/route'});

            expect(nestjsTypeormPaginate.paginate).toHaveBeenCalledWith(
                expect.objectContaining({
                    where: expect.any(Function),
                    orderBy: expect.any(Function)
                }),
                expect.objectContaining({
                    limit: 10, page: 1, route: 'testing/route'
                })
            );
            expect(nestjsTypeormPaginate.paginate).toHaveBeenCalled();
        });
    });

    describe('getLast24Hours', () => {
        it('should ask for only the results for the last 24 hours', async () => {
            spyOn(nestjsTypeormPaginate, 'paginate').and.returnValue([]);

            await service.getLast24Hours({limit: 10, page: 1, route: 'testing/route'});

            expect(nestjsTypeormPaginate.paginate).toHaveBeenCalledWith(
                expect.objectContaining({
                    where: expect.any(Function),
                    orderBy: expect.any(Function)
                }),
                expect.objectContaining({
                    limit: 10, page: 1, route: 'testing/route'
                })
            );
            expect(nestjsTypeormPaginate.paginate).toHaveBeenCalled();
        });
    });

    describe('getYesterday', () => {
        it('should ask for only the results for yesterday', async () => {
            spyOn(nestjsTypeormPaginate, 'paginate').and.returnValue([]);

            await service.getYesterday({limit: 10, page: 1, route: 'testing/route'});

            expect(nestjsTypeormPaginate.paginate).toHaveBeenCalledWith(
                expect.objectContaining({
                    where: expect.any(Function),
                    orderBy: expect.any(Function)
                }),
                expect.objectContaining({
                    limit: 10, page: 1, route: 'testing/route'
                })
            );
            expect(nestjsTypeormPaginate.paginate).toHaveBeenCalled();
        });
    });

    describe('getThisWeek', () => {
        it('should ask for only the results for this week', async () => {
            spyOn(nestjsTypeormPaginate, 'paginate').and.returnValue([]);

            await service.getThisWeek({limit: 10, page: 1, route: 'testing/route'});

            expect(nestjsTypeormPaginate.paginate).toHaveBeenCalledWith(
                expect.objectContaining({
                    where: expect.any(Function),
                    orderBy: expect.any(Function)
                }),
                expect.objectContaining({
                    limit: 10, page: 1, route: 'testing/route'
                })
            );
            expect(nestjsTypeormPaginate.paginate).toHaveBeenCalled();
        });
    });

    describe('getThisMonth', () => {
        it('should ask for only the results for this month', async () => {
            spyOn(nestjsTypeormPaginate, 'paginate').and.returnValue([]);

            await service.getThisMonth({limit: 10, page: 1, route: 'testing/route'});

            expect(nestjsTypeormPaginate.paginate).toHaveBeenCalledWith(
                expect.objectContaining({
                    where: expect.any(Function),
                    orderBy: expect.any(Function)
                }),
                expect.objectContaining({
                    limit: 10, page: 1, route: 'testing/route'
                })
            );
            expect(nestjsTypeormPaginate.paginate).toHaveBeenCalled();
        });
    });

    describe('getThisQuarter', () => {
        it('should ask for only the results for this quarter', async () => {
            spyOn(nestjsTypeormPaginate, 'paginate').and.returnValue([]);

            await service.getThisQuarter({limit: 10, page: 1, route: 'testing/route'});

            expect(nestjsTypeormPaginate.paginate).toHaveBeenCalledWith(
                expect.objectContaining({
                    where: expect.any(Function),
                    orderBy: expect.any(Function)
                }),
                expect.objectContaining({
                    limit: 10, page: 1, route: 'testing/route'
                })
            );
            expect(nestjsTypeormPaginate.paginate).toHaveBeenCalled();
        });
    });

    describe('getThisYear', () => {
        it('should ask for only the results for this year', async () => {
            spyOn(nestjsTypeormPaginate, 'paginate').and.returnValue([]);

            await service.getThisYear({limit: 10, page: 1, route: 'testing/route'});

            expect(nestjsTypeormPaginate.paginate).toHaveBeenCalledWith(
                expect.objectContaining({
                    where: expect.any(Function),
                    orderBy: expect.any(Function)
                }),
                expect.objectContaining({
                    limit: 10, page: 1, route: 'testing/route'
                })
            );
            expect(nestjsTypeormPaginate.paginate).toHaveBeenCalled();
        });
    });
});
