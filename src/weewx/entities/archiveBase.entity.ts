import {Exclude} from 'class-transformer';
import {Column} from 'typeorm';

export abstract class ArchiveBaseEntity {
    @Column('integer', {primary: true, name: 'dateTime', unique: true})
    dateTime: number;

    @Exclude()
    @Column('integer', {name: 'usUnits'})
    usUnits: number;

    @Column('integer', {name: 'interval'})
    interval: number;

    stationTimezone: string = process.env.STATION_TIMEZONE;
}
