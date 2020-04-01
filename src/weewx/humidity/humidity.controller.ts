import {Controller} from '@nestjs/common';
import {PATH_METADATA} from '@nestjs/common/constants';
import {ControllerBase} from '../base.controller';
import {HumidityService} from './humidity.service';

@Controller('humidity')
export class HumidityController extends ControllerBase<HumidityService> {
    constructor(protected service: HumidityService) {
        super(service, Reflect.getMetadata(PATH_METADATA, HumidityController));
    }
}
