import {Controller} from '@nestjs/common';
import {ControllerBase} from '../base.controller';
import {HumidityService} from './humidity.service';

@Controller('humidity')
export class HumidityController extends ControllerBase<HumidityService> {
    constructor(protected service: HumidityService) {
        super(service);
    }
}
