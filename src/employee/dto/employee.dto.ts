import { PartialType } from '@nestjs/mapped-types';
import { Type } from 'class-transformer';
import { IsArray, IsBoolean, IsDate, IsEmail, IsEnum, IsNumber, IsOptional, IsString, IsUUID, MaxLength } from 'class-validator';
import { CreateAddressDto } from 'src/address/dto/address.dto';
import { CreateFunctionsDto } from 'src/departament/dto/functions .dto';
import { CategoryCnh, Sex } from 'src/Domain/Models/Emun/db.enum';
import { CreatePropertyDto } from 'src/property/dto/property.dto';
import { CreateUserDto } from 'src/user/dto/user.dto';
export class CreateEmployeeDto {
  @IsString()
  name: string;

  @IsString()
  cpf: string;

  @IsOptional()
  @IsString()
  rg?: string;

  @IsOptional()
  @IsString()
  @MaxLength(20)
  cnh?: string;

  @IsOptional()
  @IsArray()
  @IsEnum(CategoryCnh, { each: true })
  @Type(() => String)
  category_cnh?: CategoryCnh[];

  @IsOptional()
  @IsDate()
  @Type(() => Date)
  maturity_cnh?: Date;

  @IsEmail()
  email: string;

  @IsOptional()
  @IsString()
  phone?: string;

  @IsDate()
  @Type(() => Date)
  birth: Date;

  @IsOptional()
  @IsUUID()
  addressId?: string;

  @IsOptional()
  @Type(() => CreateAddressDto)
  address?: CreateAddressDto;

  @IsDate()
  @Type(() => Date)
  admission: Date;

  @IsNumber({ maxDecimalPlaces: 2 })
  salary: number;

  @IsOptional()
  @IsString()
  @MaxLength(10)
  cbo?: string;

  @IsOptional()
  @IsString()
  @MaxLength(15)
  pis?: string;

  @IsOptional()
  @IsEnum(Sex)
  sex?: Sex;

  @IsOptional()
  @IsDate()
  @Type(() => Date)
  demission?: Date;

  @IsOptional()
  @IsUUID()
  propertyId?: string;

  @IsOptional()
  @Type(() => CreatePropertyDto)
  property?: CreatePropertyDto;

  @IsOptional()
  @IsUUID()
  functionId?: string;

  @IsOptional()
  @Type(() => CreateFunctionsDto)
  function?: CreateFunctionsDto;

  @IsOptional()
  @IsBoolean()
  active?: boolean = true;

  @IsOptional()
  @Type(() => CreateUserDto)
  user?: CreateUserDto;
}
export class UpdateEmployeeDto extends PartialType(CreateEmployeeDto) {}
