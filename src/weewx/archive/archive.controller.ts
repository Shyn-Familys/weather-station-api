import {Controller} from '@nestjs/common';
import {PATH_METADATA} from '@nestjs/common/constants';
import {ControllerBase} from '../base.controller';
import {ArchiveService} from './archive.service';

@Controller('archive')
export class ArchiveController extends ControllerBase<ArchiveService> {
    constructor(protected service: ArchiveService) {
        super(service, Reflect.getMetadata(PATH_METADATA, ArchiveController));
    }
}
