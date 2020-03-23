import { AfterLoad, Column, Entity } from "typeorm";
import { Units } from '../Units';

@Entity("archive")
export class Pressure {
    @Column("integer", {primary: true, name: "dateTime", unique: true})
    dateTime: number;

    @Column("integer", {name: "usUnits"})
    usUnits: number;

    @Column("integer", {name: "interval"})
    interval: number;

    @Column("real", {name: "barometer", nullable: true})
    barometer: number | null;

    @Column("real", {name: "pressure", nullable: true})
    pressure: number | null;

    @Column("real", {name: "altimeter", nullable: true})
    altimeter: number | null;

    units: string;

    @AfterLoad()
    setComputedColumns() {
        this.units = this.usUnits === Units.US ? 'inHg' : 'mbar';
    }
}
