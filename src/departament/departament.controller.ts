import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { BaseController } from 'src/Domain/Repository/controller-default.repository';
import { CreateDepartmentDto, UpdateDepartmentDto } from './dto/departament.dto';
import { CreateFunctionsDto, UpdateFunctionsDto } from './dto/functions .dto';
import { DepartamentService, FunctionsService } from './departament.service';

@Controller('department')
export class DepartamentController extends BaseController<CreateDepartmentDto, UpdateDepartmentDto, any> {
  constructor(private readonly departmentService: DepartamentService) {
    super(departmentService);
  }

  @HttpCode(HttpStatus.OK)
  @Get('dp-desc-all')
  async getDescAll() {
    return await this.departmentService.getDescAll();
  }
}
@Controller('functions')
export class FunctionsController extends BaseController<CreateFunctionsDto, UpdateFunctionsDto, any> {
  constructor(private readonly functionsService: FunctionsService) {
    super(functionsService);
  }
}
