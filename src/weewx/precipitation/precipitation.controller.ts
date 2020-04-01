import {Controller} from '@nestjs/common';
import {PATH_METADATA} from '@nestjs/common/constants';
import {ControllerBase} from '../base.controller';
import {PrecipitationService} from './precipitation.service';

@Controller('precipitation')
export class PrecipitationController extends ControllerBase<PrecipitationService> {
    constructor(protected service: PrecipitationService) {
        super(service, Reflect.getMetadata(PATH_METADATA, PrecipitationController));
    }
}
