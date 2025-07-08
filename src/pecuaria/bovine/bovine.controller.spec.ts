import { Test, TestingModule } from '@nestjs/testing';
import { BovineController } from './bovine.controller';
import { BovineService } from './bovine.service';

describe('BovineController', () => {
  let controller: BovineController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BovineController],
      providers: [BovineService],
    }).compile();

    controller = module.get<BovineController>(BovineController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
