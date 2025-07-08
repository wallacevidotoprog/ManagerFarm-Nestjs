import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsOptional, IsString, IsUUID, MaxLength } from 'class-validator';
export class CreateFunctionsDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  description?: string;

  @IsUUID()
  departmentId: string;
}
export class UpdateFunctionsDto extends PartialType(CreateFunctionsDto) {}
