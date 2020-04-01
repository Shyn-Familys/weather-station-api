import {Controller} from '@nestjs/common';
import {PATH_METADATA} from '@nestjs/common/constants';
import {ControllerBase} from '../base.controller';
import {SolarService} from './solar.service';

@Controller('solar')
export class SolarController extends ControllerBase<SolarService> {
    constructor(protected service: SolarService) {
        super(service, Reflect.getMetadata(PATH_METADATA, SolarController));
    }
}
