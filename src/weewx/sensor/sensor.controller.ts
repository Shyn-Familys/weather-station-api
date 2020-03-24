import {Controller} from '@nestjs/common';
import {ControllerBase} from '../base.controller';
import {SensorService} from './sensor.service';

@Controller('sensor')
export class SensorController extends ControllerBase<SensorService> {
    constructor(protected service: SensorService) {
        super(service);
    }
}
