import { Test, TestingModule } from '@nestjs/testing';
import { HistoricModificationService } from './historic-modification.service';

describe('HistoricModificationService', () => {
  let service: HistoricModificationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HistoricModificationService],
    }).compile();

    service = module.get<HistoricModificationService>(HistoricModificationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
