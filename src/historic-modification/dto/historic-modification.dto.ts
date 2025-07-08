import { PartialType } from '@nestjs/mapped-types';
import { Type } from 'class-transformer';
import { IsEnum, IsJSON, IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';
import { ActionModification } from 'src/Domain/Models/Emun/db.enum';
import { UserEntity } from 'src/user/entities/user.entity';
export class CreateHistoricModificationDto {
  @IsUUID()
  userId: string;

  @IsOptional()
  @Type(() => UserEntity)
  user?: UserEntity;

  @IsEnum(ActionModification)
  action: ActionModification = ActionModification.NONE;

  @IsString()
  @IsNotEmpty()
  tableName: string;

  @IsNotEmpty()
  @IsJSON()
  jsonData: any;
}
export class UpdateHistoricModificationDto extends PartialType(CreateHistoricModificationDto) {}
