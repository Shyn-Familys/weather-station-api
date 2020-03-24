import {AfterLoad, Column, Entity} from "typeorm";
import {ArchiveBaseEntity} from './archiveBase.entity';
import {Units} from '../enums';

@Entity("archive")
export class PrecipitationEntity extends ArchiveBaseEntity {

    @Column("real", {name: "rain", nullable: true})
    rain: number | null;
    rainUnits: string | null;

    @Column("real", {name: "rainRate", nullable: true})
    rainRate: number | null;
    rainRateUnits: string | null;

    @Column("real", {name: "hail", nullable: true})
    hail: number | null;
    hailUnits: string | null;

    @Column("real", {name: "hailRate", nullable: true})
    hailRate: number | null;
    hailRateUnits: string | null;

    @AfterLoad()
    setUnits() {
        switch (this.usUnits) {
            case Units.US:
                this.rainUnits = 'in';
                this.rainRateUnits = 'in/h';
                this.hailUnits = 'in';
                this.hailRateUnits = 'in/h';
                break;

            case Units.METRIC:
                this.rainUnits = 'cm';
                this.rainRateUnits = 'cm/h';
                this.hailUnits = 'cm';
                this.hailRateUnits = 'cm/h';
                break;

            case Units.METRICWX:
                this.rainUnits = 'mm';
                this.rainRateUnits = 'mm/h';
                this.hailUnits = 'mm';
                this.hailRateUnits = 'mm/h';
                break;
        }
    }
}
