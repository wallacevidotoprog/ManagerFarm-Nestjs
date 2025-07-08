import { PartialType } from '@nestjs/mapped-types';
import { Type } from 'class-transformer';
import { IsArray, IsBoolean, IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString, IsUUID, MaxLength, ValidateNested } from 'class-validator';
import { CreateAddressDto } from 'src/address/dto/address.dto';
import { FarmActivityType, PropertyStatus } from 'src/Domain/Models/Emun/db.enum';
import { MapPoint } from 'src/Domain/Models/map-points';
import { CreateUserDto } from 'src/user/dto/user.dto';

export class CreatePropertyDto {
  @IsString()
  @IsNotEmpty()
  cnpj: string;

  @IsString()
  @IsNotEmpty()
  company: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsOptional()
  @IsUUID()
  addressId: string;

  @ValidateNested()
  @Type(() => CreateAddressDto)
  address: CreateAddressDto;

  @IsNumber()
  size: number;

  @IsArray()
  mapPoints: MapPoint[];
  // @IsString()
  // mapPoints: string;
// mapPoints: MapPoint[];
  // @IsArray()
  // @ValidateNested({ each: true })
  // @Type(() => MapPoint)
  // mapPoints: MapPoint[];

  @IsOptional()
  @IsUUID()
  ownerId?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateUserDto)
  owner?: CreateUserDto;

  @IsEnum(PropertyStatus)
  @IsOptional()
  status: PropertyStatus = PropertyStatus.NONE;

  @IsBoolean()
  active: boolean = true;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  description?: string;

  @IsArray()
  @IsEnum(FarmActivityType, { each: true })
  @IsOptional()
  propertyActivities?: FarmActivityType[];
}
export class UpdatePropertyDto extends PartialType(CreatePropertyDto) {}
