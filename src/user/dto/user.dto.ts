import { PartialType } from '@nestjs/mapped-types';
import { Type } from 'class-transformer';
import { IsBoolean, IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString, IsUUID, Matches, ValidateNested } from 'class-validator';
import { CreateAddressDto } from 'src/address/dto/address.dto';
import { Role } from 'src/Domain/Models/Emun/db.enum';
export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  @Matches(/^\d{3}\.?\d{3}\.?\d{3}-?\d{2}$/, {
    message: 'CPF inválido',
  })
  cpf: string;

  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsOptional()
  @IsString()
  phone?: string;

  @IsOptional()
  @IsUUID()
  addressId: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateAddressDto)
  address?: CreateAddressDto;

  @IsEnum(Role)
  role: Role = Role.NONE;

  @IsOptional()
  @IsUUID()
  employeeId?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateAddressDto)
  employee?: CreateAddressDto;

  @IsOptional()
  @IsBoolean()
  active: boolean = true;
}
export class UpdateUserDto extends PartialType(CreateUserDto) {}
