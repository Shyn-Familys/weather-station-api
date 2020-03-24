import {Controller} from '@nestjs/common';
import {ControllerBase} from '../base.controller';
import {AgricultureService} from './agriculture.service';
import {PATH_METADATA} from '@nestjs/common/constants';

@Controller('agriculture')
export class AgricultureController extends ControllerBase<AgricultureService> {
    constructor(protected service: AgricultureService) {
        super(service, Reflect.getMetadata(PATH_METADATA, AgricultureController));
    }
}
