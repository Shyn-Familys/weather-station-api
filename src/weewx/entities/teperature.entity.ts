import {AfterLoad, Column, Entity} from "typeorm";
import {ArchiveBaseEntity} from './archiveBase.entity';
import {Units} from '../enums';

@Entity("archive")
export class TemperatureEntity extends ArchiveBaseEntity {

    @Column("real", {name: "outTemp", nullable: true})
    outsideTemperature: number | null;
    outsideTemperatureUnits: string | null;

    @Column("real", {name: "dewpoint", nullable: true})
    dewPoint: number | null;
    dewPointUnits: string | null;

    @Column("real", {name: "windchill", nullable: true})
    windChill: number | null;
    windChillUnits: string | null;

    @Column("real", {name: "heatindex", nullable: true})
    heatIndex: number | null;
    heatIndexUnits: string | null;

    @Column("real", {name: "extraTemp1", nullable: true})
    extraTemperature1: number | null;
    extraTemperature1Units: string | null;

    @Column("real", {name: "extraTemp2", nullable: true})
    extraTemperature2: number | null;
    extraTemperature2Units: string | null;

    @Column("real", {name: "extraTemp3", nullable: true})
    extraTemperature3: number | null;
    extraTemperature3Units: string | null;

    @AfterLoad()
    setUnits() {
        switch (this.usUnits) {
            case Units.US:
                this.outsideTemperatureUnits = 'F';
                this.dewPointUnits = 'F';
                this.windChillUnits = 'F';
                this.heatIndexUnits = 'F';
                this.extraTemperature1Units = 'F';
                this.extraTemperature2Units = 'F';
                this.extraTemperature3Units = 'F';
                break;

            case Units.METRIC:
            case Units.METRICWX:
                this.outsideTemperatureUnits = 'C';
                this.dewPointUnits = 'C';
                this.windChillUnits = 'C';
                this.heatIndexUnits = 'C';
                this.extraTemperature1Units = 'C';
                this.extraTemperature2Units = 'C';
                this.extraTemperature3Units = 'C';
                break;
        }
    }
}
