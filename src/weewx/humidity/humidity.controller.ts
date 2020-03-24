import {Controller} from '@nestjs/common';
import {ControllerBase} from '../base.controller';
import {HumidityService} from './humidity.service';
import {PATH_METADATA} from '@nestjs/common/constants';

@Controller('humidity')
export class HumidityController extends ControllerBase<HumidityService> {
    constructor(protected service: HumidityService) {
        super(service, Reflect.getMetadata(PATH_METADATA, HumidityController));
    }
}
