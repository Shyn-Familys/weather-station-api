import {Controller} from '@nestjs/common';
import {ControllerBase} from '../base.controller';
import {SolarService} from './solar.service';

@Controller('solar')
export class SolarController extends ControllerBase<SolarService> {
    constructor(protected service: SolarService) {
        super(service);
    }
}
