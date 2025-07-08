import { PartialType } from '@nestjs/mapped-types';
import { IsEnum, IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';
import { Departaments } from 'src/Domain/Models/Emun/db.enum';
export class CreateDepartmentDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEnum(Departaments)
  functions: Departaments = Departaments.NONE;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  description?: string;
}
export class UpdateDepartmentDto extends PartialType(CreateDepartmentDto) {}
