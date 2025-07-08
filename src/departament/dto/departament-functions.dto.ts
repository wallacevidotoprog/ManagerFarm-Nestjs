import { PartialType } from '@nestjs/mapped-types';
import { Type } from 'class-transformer';
import { IsUUID, ValidateNested } from 'class-validator';
import { CreateEmployeeDto } from 'src/employee/dto/employee.dto';
import { CreateDepartmentDto } from './departament.dto';
import { CreateFunctionsDto } from './functions .dto';

export class CreateDepartamentFunctionsDto {
  @IsUUID()
  employeeId: string;

  @ValidateNested()
  @Type(() => CreateEmployeeDto)
  employee: CreateEmployeeDto;

  @IsUUID()
  departmentId: string;

  @ValidateNested()
  @Type(() => CreateDepartmentDto)
  department: CreateDepartmentDto;

  @IsUUID()
  functionsId: string;

  @ValidateNested()
  @Type(() => CreateFunctionsDto)
  functions: CreateFunctionsDto;
}
export class UpdateDepartmentFunctionsDto extends PartialType(CreateDepartamentFunctionsDto) {}
