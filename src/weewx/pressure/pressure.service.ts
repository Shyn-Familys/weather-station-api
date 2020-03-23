import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Pressure } from '../entities';
import { Repository } from 'typeorm';

@Injectable()
export class PressureService {

    constructor(
        @InjectRepository(Pressure)
        private pressureRepository: Repository<Pressure>
    ) {
    }

    async getFirstN(num = 10): Promise<Pressure[]> {
        return await this.pressureRepository.find({take: num});
    }
}
