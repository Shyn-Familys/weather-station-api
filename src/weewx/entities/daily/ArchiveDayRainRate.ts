import {Column, Entity} from "typeorm";

@Entity("archive_day_rainRate")
export class ArchiveDayRainRate {
    @Column("integer", {primary: true, serviceFnName: "dateTime", unique: true})
    dateTime: number;

    @Column("real", {serviceFnName: "min", nullable: true})
    min: number | null;

    @Column("integer", {serviceFnName: "mintime", nullable: true})
    mintime: number | null;

    @Column("real", {serviceFnName: "max", nullable: true})
    max: number | null;

    @Column("integer", {serviceFnName: "maxtime", nullable: true})
    maxtime: number | null;

    @Column("real", {serviceFnName: "sum", nullable: true})
    sum: number | null;

    @Column("integer", {serviceFnName: "count", nullable: true})
    count: number | null;

    @Column("real", {serviceFnName: "wsum", nullable: true})
    wsum: number | null;

    @Column("integer", {serviceFnName: "sumtime", nullable: true})
    sumtime: number | null;
}
