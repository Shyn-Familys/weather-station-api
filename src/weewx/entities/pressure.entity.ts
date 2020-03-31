import {AfterLoad, Column, Entity} from 'typeorm';
import {Units} from '../enums';
import {ArchiveBaseEntity} from './archiveBase.entity';

@Entity('archive')
export class PressureEntity extends ArchiveBaseEntity {

    @Column('real', {name: 'barometer', nullable: true})
    barometer: number | null;
    barometerUnit: string | null;

    @Column('real', {name: 'pressure', nullable: true})
    pressure: number | null;
    pressureUnit: string | null;

    @Column('real', {name: 'altimeter', nullable: true})
    altimeter: number | null;
    altimeterUnit: string | null;

    @AfterLoad()
    setUnits() {
        this.barometerUnit = this.usUnits === Units.US ? 'inHg' : 'mbar';
        this.pressureUnit = this.usUnits === Units.US ? 'inHg' : 'mbar';
        this.altimeterUnit = this.usUnits === Units.US ? 'inHg' : 'mbar';
    }
}
