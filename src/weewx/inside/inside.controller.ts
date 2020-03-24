import {Controller} from '@nestjs/common';
import {ControllerBase} from '../base.controller';
import {InsideService} from './inside.service';

@Controller('inside')
export class InsideController extends ControllerBase<InsideService> {
    constructor(protected service: InsideService) {
        super(service);
    }
}
