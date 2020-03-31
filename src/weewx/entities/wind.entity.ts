import {AfterLoad, Column, Entity} from 'typeorm';
import {Units} from '../enums';
import {ArchiveBaseEntity} from './archiveBase.entity';

@Entity('archive')
export class WindEntity extends ArchiveBaseEntity {

    @Column('real', {name: 'windSpeed', nullable: true})
    windSpeed: number | null;
    windSpeedUnits: string | null;

    @Column('real', {name: 'windDir', nullable: true})
    windDirection: number | null;
    windDirectionUnits: '°';

    @Column('real', {name: 'windGust', nullable: true})
    windGustSpeed: number | null;
    windGustSpeedUnits: string | null;

    @Column('real', {name: 'windGustDir', nullable: true})
    windGustDirection: number | null;
    windGustDirectionUnits: '°';

    @AfterLoad()
    setUnits() {
        switch (this.usUnits) {
            case Units.US:
                this.windSpeedUnits = 'MPH';
                this.windGustSpeedUnits = 'MPH';
                break;

            case Units.METRIC:
                this.windSpeedUnits = 'km/h';
                this.windGustSpeedUnits = 'km/h';
                break;

            case Units.METRICWX:
                this.windSpeedUnits = 'm/s';
                this.windGustSpeedUnits = 'm/s';
                break;
        }
    }
}
