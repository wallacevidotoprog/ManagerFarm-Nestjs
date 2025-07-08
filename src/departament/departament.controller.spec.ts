import { Test, TestingModule } from '@nestjs/testing';
import { DepartamentController } from './departament.controller';
import { DepartamentService } from './departament.service';

describe('DepartmentController', () => {
  let controller: DepartamentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DepartamentController],
      providers: [DepartamentService],
    }).compile();

    controller = module.get<DepartamentController>(DepartamentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
