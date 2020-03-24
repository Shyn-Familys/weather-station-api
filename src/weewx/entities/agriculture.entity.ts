import {AfterLoad, Column, Entity} from "typeorm";
import {ArchiveBaseEntity} from './archiveBase.entity';
import {Units} from '../enums';

@Entity("archive")
export class AgricultureEntity extends ArchiveBaseEntity {

    @Column("real", {name: "soilTemp1", nullable: true})
    soilTemperature1: number | null;
    soilTemperature1Units: string | null;

    @Column("real", {name: "soilTemp2", nullable: true})
    soilTemperature2: number | null;
    soilTemperature2Units: string | null;

    @Column("real", {name: "soilTemp3", nullable: true})
    soilTemperature3: number | null;
    soilTemperature3Units: string | null;

    @Column("real", {name: "soilTemp4", nullable: true})
    soilTemperature4: number | null;
    soilTemperature4Units: string | null;

    @Column("real", {name: "leafTemp1", nullable: true})
    leafTemperature1: number | null;
    leafTemperature1Units: string | null;

    @Column("real", {name: "leafTemp2", nullable: true})
    leafTemperature2: number | null;
    leafTemperature2Units: string | null;

    @Column("real", {name: "soilMoist1", nullable: true})
    soilMoisture1: number | null;
    soilMoisture1Units = 'centibar';

    @Column("real", {name: "soilMoist2", nullable: true})
    soilMoisture2: number | null;
    soilMoisture2Units = 'centibar';

    @Column("real", {name: "soilMoist3", nullable: true})
    soilMoisture3: number | null;
    soilMoisture3Units = 'centibar';

    @Column("real", {name: "soilMoist4", nullable: true})
    soilMoisture4: number | null;
    soilMoisture4Units = 'centibar';

    @Column("real", {name: "leafWet1", nullable: true})
    leafWetness1: number | null;
    leafWetness1Units = 'BT';

    @Column("real", {name: "leafWet2", nullable: true})
    leafWetness2: number | null;
    leafWetness2Units = 'BT';

    @AfterLoad()
    setUnits() {
        switch (this.usUnits) {
            case Units.US:
                this.soilTemperature1Units = 'F';
                this.soilTemperature2Units = 'F';
                this.soilTemperature3Units = 'F';
                this.soilTemperature4Units = 'F';
                this.leafTemperature1Units = 'F';
                this.leafTemperature2Units = 'F';
                break;

            case Units.METRIC:
            case Units.METRICWX:
                this.soilTemperature1Units = 'C';
                this.soilTemperature2Units = 'C';
                this.soilTemperature3Units = 'C';
                this.soilTemperature4Units = 'C';
                this.leafTemperature1Units = 'C';
                this.leafTemperature2Units = 'C';
                break;
        }

    }
}
