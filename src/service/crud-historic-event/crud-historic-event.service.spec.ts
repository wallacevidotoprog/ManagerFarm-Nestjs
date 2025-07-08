import { Test, TestingModule } from '@nestjs/testing';
import { CrudHistoricEventService } from './crud-historic-event.service';

describe('CrudHistoricEventService', () => {
  let service: CrudHistoricEventService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CrudHistoricEventService],
    }).compile();

    service = module.get<CrudHistoricEventService>(CrudHistoricEventService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
