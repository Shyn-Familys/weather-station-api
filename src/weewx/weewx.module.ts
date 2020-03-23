import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Entities } from './entities';
import { PressureService } from './pressure/pressure.service';
import { PressureController } from './pressure/pressure.controller';

@Module({
    imports: [TypeOrmModule.forFeature([...Entities])],
    controllers: [PressureController],
    providers: [PressureService],
})
export class WeewxModule {
}
