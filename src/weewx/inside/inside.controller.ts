import {Controller} from '@nestjs/common';
import {PATH_METADATA} from '@nestjs/common/constants';
import {ControllerBase} from '../base.controller';
import {InsideService} from './inside.service';

@Controller('inside')
export class InsideController extends ControllerBase<InsideService> {
    constructor(protected service: InsideService) {
        super(service, Reflect.getMetadata(PATH_METADATA, InsideController));
    }
}
