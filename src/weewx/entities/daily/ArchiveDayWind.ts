import {Column, Entity} from 'typeorm';

@Entity('archive_day_wind')
export class ArchiveDayWind {
    @Column('integer', {primary: true, name: 'dateTime', unique: true})
    dateTime: number;

    @Column('real', {name: 'min', nullable: true})
    min: number | null;

    @Column('integer', {name: 'mintime', nullable: true})
    mintime: number | null;

    @Column('real', {name: 'max', nullable: true})
    max: number | null;

    @Column('integer', {name: 'maxtime', nullable: true})
    maxtime: number | null;

    @Column('real', {name: 'sum', nullable: true})
    sum: number | null;

    @Column('integer', {name: 'count', nullable: true})
    count: number | null;

    @Column('real', {name: 'wsum', nullable: true})
    wsum: number | null;

    @Column('integer', {name: 'sumtime', nullable: true})
    sumtime: number | null;

    @Column('real', {name: 'max_dir', nullable: true})
    maxDir: number | null;

    @Column('real', {name: 'xsum', nullable: true})
    xsum: number | null;

    @Column('real', {name: 'ysum', nullable: true})
    ysum: number | null;

    @Column('integer', {name: 'dirsumtime', nullable: true})
    dirsumtime: number | null;

    @Column('real', {name: 'squaresum', nullable: true})
    squaresum: number | null;

    @Column('real', {name: 'wsquaresum', nullable: true})
    wsquaresum: number | null;
}
