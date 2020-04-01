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
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                ServiceBaseSpec,
                {
                    provide: getRepositoryToken(ArchiveBaseEntity),
                    useClass: Repository,
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
            const expectedTime = moment().tz('UTC').startOf('day').unix();
            spyOn(nestjsTypeormPaginate, 'paginate').and.returnValue([]);

            await service.getToday({limit: 10, page: 1, route: 'testing/route'});

            expect(nestjsTypeormPaginate.paginate).toHaveBeenCalledWith(
                expect.any(Object),
                expect.any(Object),
                expect.objectContaining({
                    order: expect.objectContaining({dateTime: 'ASC'}),
                    where: expect.objectContaining({
                        dateTime: expect.objectContaining({
                            _value: expectedTime
                        })
                    })
                })
            );
        });
    });

    describe('getLast24Hours', () => {
        it('should ask for only the results for the last 24 hours', async () => {
            const expectedTime = moment().tz('UTC').subtract(1, 'day').unix();
            spyOn(nestjsTypeormPaginate, 'paginate').and.returnValue([]);

            await service.getLast24Hours({limit: 10, page: 1, route: 'testing/route'});

            expect(nestjsTypeormPaginate.paginate).toHaveBeenCalledWith(
                expect.any(Object),
                expect.any(Object),
                expect.objectContaining({
                    order: expect.objectContaining({dateTime: 'ASC'}),
                    where: expect.objectContaining({
                        dateTime: expect.objectContaining({
                            _value: expectedTime
                        })
                    })
                })
            );
        });
    });

    describe('getYesterday', () => {
        it('should ask for only the results for yesterday', async () => {
            const end = moment().tz('UTC').startOf('day');
            const start = moment(end).subtract(1, 'days');
            spyOn(nestjsTypeormPaginate, 'paginate').and.returnValue([]);

            await service.getYesterday({limit: 10, page: 1, route: 'testing/route'});

            expect(nestjsTypeormPaginate.paginate).toHaveBeenCalledWith(
                expect.any(Object),
                expect.any(Object),
                expect.objectContaining({
                    order: expect.objectContaining({dateTime: 'ASC'}),
                    where: expect.objectContaining({
                        dateTime: expect.objectContaining({
                            _value: [start.unix(), end.unix()]
                        })
                    })
                })
            );
        });
    });

    describe('getThisWeek', () => {
        it('should ask for only the results for this week', async () => {
            const expectedTime = moment().tz('UTC').startOf('week').unix();
            spyOn(nestjsTypeormPaginate, 'paginate').and.returnValue([]);

            await service.getThisWeek({limit: 10, page: 1, route: 'testing/route'});

            expect(nestjsTypeormPaginate.paginate).toHaveBeenCalledWith(
                expect.any(Object),
                expect.any(Object),
                expect.objectContaining({
                    order: expect.objectContaining({dateTime: 'ASC'}),
                    where: expect.objectContaining({
                        dateTime: expect.objectContaining({
                            _value: expectedTime
                        })
                    })
                })
            );
        });
    });

    describe('getThisMonth', () => {
        it('should ask for only the results for this month', async () => {
            const expectedTime = moment().tz('UTC').startOf('month').unix();
            spyOn(nestjsTypeormPaginate, 'paginate').and.returnValue([]);

            await service.getThisMonth({limit: 10, page: 1, route: 'testing/route'});

            expect(nestjsTypeormPaginate.paginate).toHaveBeenCalledWith(
                expect.any(Object),
                expect.any(Object),
                expect.objectContaining({
                    order: expect.objectContaining({dateTime: 'ASC'}),
                    where: expect.objectContaining({
                        dateTime: expect.objectContaining({
                            _value: expectedTime
                        })
                    })
                })
            );
        });
    });

    describe('getThisQuarter', () => {
        it('should ask for only the results for this quarter', async () => {
            const expectedTime = moment().tz('UTC').startOf('quarter').unix();
            spyOn(nestjsTypeormPaginate, 'paginate').and.returnValue([]);

            await service.getThisQuarter({limit: 10, page: 1, route: 'testing/route'});

            expect(nestjsTypeormPaginate.paginate).toHaveBeenCalledWith(
                expect.any(Object),
                expect.any(Object),
                expect.objectContaining({
                    order: expect.objectContaining({dateTime: 'ASC'}),
                    where: expect.objectContaining({
                        dateTime: expect.objectContaining({
                            _value: expectedTime
                        })
                    })
                })
            );
        });
    });

    describe('getThisYear', () => {
        it('should ask for only the results for this year', async () => {
            const expectedTime = moment().tz('UTC').startOf('year').unix();
            spyOn(nestjsTypeormPaginate, 'paginate').and.returnValue([]);

            await service.getThisYear({limit: 10, page: 1, route: 'testing/route'});

            expect(nestjsTypeormPaginate.paginate).toHaveBeenCalledWith(
                expect.any(Object),
                expect.any(Object),
                expect.objectContaining({
                    order: expect.objectContaining({dateTime: 'ASC'}),
                    where: expect.objectContaining({
                        dateTime: expect.objectContaining({
                            _value: expectedTime
                        })
                    })
                })
            );
        });
    });
});
