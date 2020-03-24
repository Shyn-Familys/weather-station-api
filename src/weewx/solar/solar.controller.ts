import {Controller} from '@nestjs/common';
import {ControllerBase} from '../base.controller';
import {SolarService} from './solar.service';
import {PATH_METADATA} from '@nestjs/common/constants';

@Controller('solar')
export class SolarController extends ControllerBase<SolarService> {
    constructor(protected service: SolarService) {
        super(service, Reflect.getMetadata(PATH_METADATA, SolarController));
    }
}
