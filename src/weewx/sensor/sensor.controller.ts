import {Controller} from '@nestjs/common';
import {ControllerBase} from '../base.controller';
import {SensorService} from './sensor.service';
import {PATH_METADATA} from '@nestjs/common/constants';

@Controller('sensor')
export class SensorController extends ControllerBase<SensorService> {
    constructor(protected service: SensorService) {
        super(service, Reflect.getMetadata(PATH_METADATA, SensorController));
    }
}
