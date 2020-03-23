import { Controller, Get } from '@nestjs/common';
import { Pressure } from '../entities';
import { PressureService } from './pressure.service';

@Controller('pressure')
export class PressureController {
    constructor(private pressureService: PressureService) {
    }

    @Get()
    async getAll(): Promise<Pressure[]> {
        return await this.pressureService.getFirstN();
    }
}
