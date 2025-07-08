import { Test, TestingModule } from '@nestjs/testing';
import { BovineService } from './bovine.service';

describe('BovineService', () => {
  let service: BovineService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BovineService],
    }).compile();

    service = module.get<BovineService>(BovineService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
