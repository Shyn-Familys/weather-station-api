import {AgricultureEntity} from './agriculture.entity';
import {ArchiveEntity} from './archive.entity';
import {HumidityEntity} from './humidity.entity';
import {InsideEntity} from './inside.entity';
import {PrecipitationEntity} from './precipitation.entity';
import {PressureEntity} from './pressure.entity';
import {SensorEntity} from './sensor.entity';
import {SolarEntity} from './solar.entity';
import {TemperatureEntity} from './teperature.entity';
import {WindEntity} from './wind.entity';

export const Entities: any[] = [
    ArchiveEntity,
    AgricultureEntity,
    HumidityEntity,
    InsideEntity,
    PrecipitationEntity,
    PressureEntity,
    SensorEntity,
    SolarEntity,
    TemperatureEntity,
    WindEntity
];

export * from './agriculture.entity';
export * from './humidity.entity';
export * from './inside.entity';
export * from './precipitation.entity';
export * from './pressure.entity';
export * from './sensor.entity';
export * from './solar.entity';
export * from './teperature.entity';
export * from './wind.entity';
