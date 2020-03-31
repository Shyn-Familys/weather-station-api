import {AfterLoad, Column, Entity} from 'typeorm';
import {Units} from '../enums';
import {ArchiveBaseEntity} from './archiveBase.entity';

@Entity('archive')
export class InsideEntity extends ArchiveBaseEntity {

    @Column('real', {name: 'inTemp', nullable: true})
    insideTemperature: number | null;
    insideTemperatureUnits: string | null;

    @Column('real', {name: 'inHumidity', nullable: true})
    insideHumidity: number | null;
    insideHumidityUnits = '%';

    @AfterLoad()
    setUnits() {
        switch (this.usUnits) {
            case Units.US:
                this.insideTemperatureUnits = 'F';
                break;

            case Units.METRIC:
            case Units.METRICWX:
                this.insideTemperatureUnits = 'C';
                break;
        }
    }
}
