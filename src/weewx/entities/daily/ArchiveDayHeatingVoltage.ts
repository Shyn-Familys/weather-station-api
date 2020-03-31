import {Column, Entity} from 'typeorm';

@Entity('archive_day_heatingVoltage')
export class ArchiveDayHeatingVoltage {
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
}
