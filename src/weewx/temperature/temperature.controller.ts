import {Controller} from '@nestjs/common';
import {ControllerBase} from '../base.controller';
import {TemperatureService} from './temperature.service';
import {PATH_METADATA} from '@nestjs/common/constants';

@Controller('temperature')
export class TemperatureController extends ControllerBase<TemperatureService> {
    constructor(protected service: TemperatureService) {
        super(service, Reflect.getMetadata(PATH_METADATA, TemperatureController));
    }
}
