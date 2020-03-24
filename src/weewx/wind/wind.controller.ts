import {Controller} from '@nestjs/common';
import {ControllerBase} from '../base.controller';
import {WindService} from './wind.service';

@Controller('wind')
export class WindController extends ControllerBase<WindService> {
    constructor(protected service: WindService) {
        super(service);
    }
}
