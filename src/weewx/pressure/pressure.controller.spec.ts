import { Test, TestingModule } from '@nestjs/testing';
import { PressureController } from './pressure.controller';

describe('Pressure Controller', () => {
  let controller: PressureController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PressureController],
    }).compile();

    controller = module.get<PressureController>(PressureController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
