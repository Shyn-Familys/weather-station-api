import {PressureController, PressureService} from './pressure';
import {AgricultureController, AgricultureService} from './agriculture';
import {HumidityController, HumidityService} from './humidity';
import {InsideController, InsideService} from './inside';
import {PrecipitationController, PrecipitationService} from './precipitation';
import {SensorController, SensorService} from './sensor';
import {SolarController, SolarService} from './solar';
import {TemperatureController, TemperatureService} from './temperature';
import {WindController, WindService} from './wind';

export const controllers: any[] = [
    AgricultureController,
    HumidityController,
    InsideController,
    PrecipitationController,
    PressureController,
    SensorController,
    SolarController,
    TemperatureController,
    WindController
];

export const services: any[] = [
    AgricultureService,
    HumidityService,
    InsideService,
    PrecipitationService,
    PressureService,
    SensorService,
    SolarService,
    TemperatureService,
    WindService
];
