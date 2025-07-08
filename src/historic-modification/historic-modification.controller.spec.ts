import { Test, TestingModule } from '@nestjs/testing';
import { HistoricModificationController } from './historic-modification.controller';
import { HistoricModificationService } from './historic-modification.service';

describe('HistoricModificationController', () => {
  let controller: HistoricModificationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HistoricModificationController],
      providers: [HistoricModificationService],
    }).compile();

    controller = module.get<HistoricModificationController>(HistoricModificationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
