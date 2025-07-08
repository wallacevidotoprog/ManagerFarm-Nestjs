import { PartialType } from '@nestjs/mapped-types';
import { Type } from 'class-transformer';
import { IsBoolean, IsEnum, IsJSON, IsNotEmpty, IsNumber, IsOptional, IsString, IsUUID, MaxLength, ValidateNested } from 'class-validator';
import { CreateAddressDto } from 'src/address/dto/address.dto';
import { AddressEntity } from 'src/address/entities/address.entity';
import { PropertyStatus } from 'src/Domain/Models/Emun/db.enum';
import { MapPoint } from 'src/Domain/Models/map-points';
import { CreateUserDto } from 'src/user/dto/user.dto';
import { UserEntity } from 'src/user/entities/user.entity';

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

  @IsUUID()
  addressId: string;

  @ValidateNested()
  @Type(() => CreateAddressDto)
  address: CreateAddressDto;

  @IsNumber({ maxDecimalPlaces: 2 })
  size: number;

  @IsJSON()
  mapPoints: MapPoint[];

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
}
export class UpdatePropertyDto extends PartialType(CreatePropertyDto) {}
