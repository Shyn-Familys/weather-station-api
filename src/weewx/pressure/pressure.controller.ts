import {Controller} from '@nestjs/common';
import {ControllerBase} from '../base.controller';
import {PressureService} from './pressure.service';
import {PATH_METADATA} from '@nestjs/common/constants';

@Controller('pressure')
export class PressureController extends ControllerBase<PressureService> {
    constructor(protected service: PressureService) {
        super(service, Reflect.getMetadata(PATH_METADATA, PressureController));
    }
}
