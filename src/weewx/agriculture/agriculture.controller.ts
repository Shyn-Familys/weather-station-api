import {Controller} from '@nestjs/common';
import {ControllerBase} from '../base.controller';
import {AgricultureService} from './agriculture.service';

@Controller('agriculture')
export class AgricultureController extends ControllerBase<AgricultureService> {
    constructor(protected service: AgricultureService) {
        super(service);
    }
}
