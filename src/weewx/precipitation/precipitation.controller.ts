import {Controller} from '@nestjs/common';
import {ControllerBase} from '../base.controller';
import {PrecipitationService} from './precipitation.service';

@Controller('precipitation')
export class PrecipitationController extends ControllerBase<PrecipitationService> {
    constructor(protected service: PrecipitationService) {
        super(service);
    }
}
