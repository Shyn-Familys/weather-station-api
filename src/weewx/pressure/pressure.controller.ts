import {Controller} from '@nestjs/common';
import {PATH_METADATA} from '@nestjs/common/constants';
import {ControllerBase} from '../base.controller';
import {PressureService} from './pressure.service';

@Controller('pressure')
export class PressureController extends ControllerBase<PressureService> {
    constructor(protected service: PressureService) {
        super(service, Reflect.getMetadata(PATH_METADATA, PressureController));
    }
}
