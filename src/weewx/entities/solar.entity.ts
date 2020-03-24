import {AfterLoad, Column, Entity} from "typeorm";
import {ArchiveBaseEntity} from './archiveBase.entity';
import {Units} from '../enums';

@Entity("archive")
export class SolarEntity extends ArchiveBaseEntity {
    @Column("real", {name: "radiation", nullable: true})
    radiation: number | null;
    radiationUnits: 'W/M2';

    @Column("real", {name: "UV", nullable: true})
    uv: number | null;
    uvUnits: 'UV';

    @AfterLoad()
    setUnits() {
        switch (this.usUnits) {
            case Units.US:
                break;

            case Units.METRIC:
                break;

            case Units.METRICWX:
                break;
        }
    }
}
