import {AfterLoad, Column, Entity} from 'typeorm';
import {Units} from '../enums';
import {ArchiveBaseEntity} from './archiveBase.entity';

@Entity('archive')
export class ArchiveEntity extends ArchiveBaseEntity {

    @Column('real', {name: 'soilTemp1', nullable: true})
    soilTemperature1: number | null;
    soilTemperature1Units: string | null;

    @Column('real', {name: 'soilTemp2', nullable: true})
    soilTemperature2: number | null;
    soilTemperature2Units: string | null;

    @Column('real', {name: 'soilTemp3', nullable: true})
    soilTemperature3: number | null;
    soilTemperature3Units: string | null;

    @Column('real', {name: 'soilTemp4', nullable: true})
    soilTemperature4: number | null;
    soilTemperature4Units: string | null;

    @Column('real', {name: 'leafTemp1', nullable: true})
    leafTemperature1: number | null;
    leafTemperature1Units: string | null;

    @Column('real', {name: 'leafTemp2', nullable: true})
    leafTemperature2: number | null;
    leafTemperature2Units: string | null;

    @Column('real', {name: 'soilMoist1', nullable: true})
    soilMoisture1: number | null;
    soilMoisture1Units = 'centibar';

    @Column('real', {name: 'soilMoist2', nullable: true})
    soilMoisture2: number | null;
    soilMoisture2Units = 'centibar';

    @Column('real', {name: 'soilMoist3', nullable: true})
    soilMoisture3: number | null;
    soilMoisture3Units = 'centibar';

    @Column('real', {name: 'soilMoist4', nullable: true})
    soilMoisture4: number | null;
    soilMoisture4Units = 'centibar';

    @Column('real', {name: 'leafWet1', nullable: true})
    leafWetness1: number | null;
    leafWetness1Units = 'BT';

    @Column('real', {name: 'leafWet2', nullable: true})
    leafWetness2: number | null;
    leafWetness2Units = 'BT';

    @Column('real', {name: 'outHumidity', nullable: true})
    outsideHumidity: number | null;
    outsideHumidityUnit = '%';

    @Column('real', {name: 'ET', nullable: true})
    evapotranspiration: number | null;
    evapotranspirationUnit: string | null;

    @Column('real', {name: 'extraHumid1', nullable: true})
    extraHumid1: number | null;
    extraHumid1Unit = '%';

    @Column('real', {name: 'extraHumid2', nullable: true})
    extraHumid2: number | null;
    extraHumid2Unit = '%';

    @Column('real', {name: 'inTemp', nullable: true})
    insideTemperature: number | null;
    insideTemperatureUnits: string | null;

    @Column('real', {name: 'inHumidity', nullable: true})
    insideHumidity: number | null;
    insideHumidityUnits = '%';

    @Column('real', {name: 'rain', nullable: true})
    rain: number | null;
    rainUnits: string | null;

    @Column('real', {name: 'rainRate', nullable: true})
    rainRate: number | null;
    rainRateUnits: string | null;

    @Column('real', {name: 'hail', nullable: true})
    hail: number | null;
    hailUnits: string | null;

    @Column('real', {name: 'hailRate', nullable: true})
    hailRate: number | null;
    hailRateUnits: string | null;

    @Column('real', {name: 'barometer', nullable: true})
    barometer: number | null;
    barometerUnit: string | null;

    @Column('real', {name: 'pressure', nullable: true})
    pressure: number | null;
    pressureUnit: string | null;

    @Column('real', {name: 'altimeter', nullable: true})
    altimeter: number | null;
    altimeterUnit: string | null;

    @Column('real', {name: 'rxCheckPercent', nullable: true})
    signalQuality: number | null;
    signalQualityUnits = '%';

    @Column('real', {name: 'txBatteryStatus', nullable: true})
    transmitterBattery: number | null;
    transmitterBatteryUnits = '%';

    @Column('real', {name: 'consBatteryVoltage', nullable: true})
    consoleBatteryVoltage: number | null;
    consoleBatteryVoltageUnits = 'volts';

    @Column('real', {name: 'heatingTemp', nullable: true})
    heatingTemp: number | null;
    heatingTemperatureUnits: string | null;

    @Column('real', {name: 'heatingVoltage', nullable: true})
    heatingVoltage: number | null;
    heatingVoltageUnits = 'volts';

    @Column('real', {name: 'supplyVoltage', nullable: true})
    supplyVoltage: number | null;
    supplyVoltageUnits = 'volts';

    @Column('real', {name: 'referenceVoltage', nullable: true})
    referenceVoltage: number | null;
    referenceVoltageUnits = 'volts';

    @Column('real', {name: 'windBatteryStatus', nullable: true})
    windSensorBattery: number | null;
    windSensorBatteryUnits = '%';

    @Column('real', {name: 'rainBatteryStatus', nullable: true})
    rainSensorBattery: number | null;
    rainSensorBatteryUnits = '%';

    @Column('real', {name: 'outTempBatteryStatus', nullable: true})
    outsideTemperatureBattery: number | null;
    outsideTemperatureBatteryUnits = '%';

    @Column('real', {name: 'inTempBatteryStatus', nullable: true})
    insideTemperatureBattery: number | null;
    insideTemperatureBatteryUnits = '%';

    @Column('real', {name: 'radiation', nullable: true})
    radiation: number | null;
    radiationUnits = 'W/M2';

    @Column('real', {name: 'UV', nullable: true})
    uv: number | null;
    uvUnits = 'UV';

    @Column('real', {name: 'outTemp', nullable: true})
    outsideTemperature: number | null;
    outsideTemperatureUnits: string | null;

    @Column('real', {name: 'dewpoint', nullable: true})
    dewPoint: number | null;
    dewPointUnits: string | null;

    @Column('real', {name: 'windchill', nullable: true})
    windChill: number | null;
    windChillUnits: string | null;

    @Column('real', {name: 'heatindex', nullable: true})
    heatIndex: number | null;
    heatIndexUnits: string | null;

    @Column('real', {name: 'extraTemp1', nullable: true})
    extraTemperature1: number | null;
    extraTemperature1Units: string | null;

    @Column('real', {name: 'extraTemp2', nullable: true})
    extraTemperature2: number | null;
    extraTemperature2Units: string | null;

    @Column('real', {name: 'extraTemp3', nullable: true})
    extraTemperature3: number | null;
    extraTemperature3Units: string | null;

    @Column('real', {name: 'windSpeed', nullable: true})
    windSpeed: number | null;
    windSpeedUnits: string | null;

    @Column('real', {name: 'windDir', nullable: true})
    windDirection: number | null;
    windDirectionUnits = '°';

    @Column('real', {name: 'windGust', nullable: true})
    windGustSpeed: number | null;
    windGustSpeedUnits: string | null;

    @Column('real', {name: 'windGustDir', nullable: true})
    windGustDirection: number | null;
    windGustDirectionUnits = '°';

    @AfterLoad()
    setAgricultureUnits() {
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

    @AfterLoad()
    setHumidityUnits() {
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

    @AfterLoad()
    setInsideUnits() {
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

    @AfterLoad()
    setPrecipitationUnits() {
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

    @AfterLoad()
    setPressureUnits() {
        this.barometerUnit = this.usUnits === Units.US ? 'inHg' : 'mbar';
        this.pressureUnit = this.usUnits === Units.US ? 'inHg' : 'mbar';
        this.altimeterUnit = this.usUnits === Units.US ? 'inHg' : 'mbar';
    }

    @AfterLoad()
    setSensorUnits() {
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

    @AfterLoad()
    setSolarUnits() {
        switch (this.usUnits) {
            case Units.US:
                break;

            case Units.METRIC:
                break;

            case Units.METRICWX:
                break;
        }
    }

    @AfterLoad()
    setTemporatureUnits() {
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

    @AfterLoad()
    setWindUnits() {
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
