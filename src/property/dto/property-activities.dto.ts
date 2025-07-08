import { PartialType } from '@nestjs/mapped-types';
import { IsString, IsNotEmpty } from 'class-validator';

export class CreatePropertyActivitiesDto {
  @IsString()
  @IsNotEmpty()
  propertyId: string;

  @IsString()
  @IsNotEmpty()
  activitiesId: string;

  @IsString()
  @IsNotEmpty()
  userId: string;
}

export class UpdatePropertyActivitiesDto extends PartialType(CreatePropertyActivitiesDto) {}