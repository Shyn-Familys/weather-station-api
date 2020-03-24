import {AfterLoad, Column, Entity} from "typeorm";
import {ArchiveBaseEntity} from './archiveBase.entity';
import {Units} from '../enums';

@Entity("archive")
export class HumidityEntity extends ArchiveBaseEntity {

    @Column("real", {name: "outHumidity", nullable: true})
    outsideHumidity: number | null;
    outsideHumidityUnit = '%';

    @Column("real", {name: "ET", nullable: true})
    evapotranspiration: number | null;
    evapotranspirationUnit: string | null;

    @Column("real", {name: "extraHumid1", nullable: true})
    extraHumid1: number | null;
    extraHumid1Unit = '%';

    @Column("real", {name: "extraHumid2", nullable: true})
    extraHumid2: number | null;
    extraHumid2Unit = '%';

    @AfterLoad()
    setUnits() {
        switch (this.usUnits) {
            case Units.US:
                this.evapotranspirationUnit = 'in';
                break;

            case Units.METRIC:
                this.evapotranspirationUnit = 'cm';
                break;

            case Units.METRICWX:
                this.evapotranspirationUnit = 'mm';
                break;
        }
    }
}
