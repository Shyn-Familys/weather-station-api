import {AfterLoad, Column, Entity} from "typeorm";
import {ArchiveBaseEntity} from './archiveBase.entity';
import {Units} from '../enums';

@Entity("archive")
export class SensorEntity extends ArchiveBaseEntity {

    @Column("real", {name: "rxCheckPercent", nullable: true})
    signalQuality: number | null;
    signalQualityUnits: '%';

    @Column("real", {name: "txBatteryStatus", nullable: true})
    transmitterBattery: number | null;
    transmitterBatteryUnits: '%';

    @Column("real", {name: "consBatteryVoltage", nullable: true})
    consoleBatteryVoltage: number | null;
    consoleBatteryVoltageUnits = 'volts';

    @Column("real", {name: "heatingTemp", nullable: true})
    heatingTemp: number | null;
    heatingTemperatureUnits: string | null;

    @Column("real", {name: "heatingVoltage", nullable: true})
    heatingVoltage: number | null;
    heatingVoltageUnits = 'volts';

    @Column("real", {name: "supplyVoltage", nullable: true})
    supplyVoltage: number | null;
    supplyVoltageUnits = 'volts';

    @Column("real", {name: "referenceVoltage", nullable: true})
    referenceVoltage: number | null;
    referenceVoltageUnits = 'volts';

    @Column("real", {name: "windBatteryStatus", nullable: true})
    windSensorBattery: number | null;
    windSensorBatteryUnits: '%';

    @Column("real", {name: "rainBatteryStatus", nullable: true})
    rainSensorBattery: number | null;
    rainSensorBatteryUnits: '%';

    @Column("real", {name: "outTempBatteryStatus", nullable: true})
    outsideTemperatureBattery: number | null;
    outsideTemperatureBatteryUnits: '%';

    @Column("real", {name: "inTempBatteryStatus", nullable: true})
    insideTemperatureBattery: number | null;
    insideTemperatureBatteryUnits: '%';

    @AfterLoad()
    setUnits() {
        switch (this.usUnits) {
            case Units.US:
                this.heatingTemperatureUnits = 'F';
                break;

            case Units.METRIC:
            case Units.METRICWX:
                this.heatingTemperatureUnits = 'C';
                break;
        }
    }
}
