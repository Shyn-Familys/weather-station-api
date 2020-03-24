import {Controller} from '@nestjs/common';
import {ControllerBase} from '../base.controller';
import {TemperatureService} from './temperature.service';

@Controller('temperature')
export class TemperatureController extends ControllerBase<TemperatureService> {
    constructor(protected service: TemperatureService) {
        super(service);
    }
}
