import { PartialType } from '@nestjs/mapped-types';
import { IsOptional, IsString, Length, MaxLength } from 'class-validator';

export class CreateAddressDto {
  @IsOptional()
  @IsString({ message: 'O campo cep deve ser uma string.' })
  @MaxLength(45, { message: 'O campo cep deve ter no máximo 45 caracteres.' })
  cep?: string;

  @IsString({ message: 'O campo place (logradouro) é obrigatório e deve ser uma string.' })
  @MaxLength(100, { message: 'O campo place (logradouro) deve ter no máximo 100 caracteres.' })
  place: string;

  @IsString({ message: 'O campo number é obrigatório e deve ser uma string.' })
  @MaxLength(45, { message: 'O campo number deve ter no máximo 45 caracteres.' })
  number: string;

  @IsOptional()
  @IsString({ message: 'O campo complement deve ser uma string.' })
  @MaxLength(100, { message: 'O campo complement deve ter no máximo 100 caracteres.' })
  complement?: string;

  @IsString({ message: 'O campo neighborhood (bairro) é obrigatório e deve ser uma string.' })
  @MaxLength(80, { message: 'O campo neighborhood (bairro) deve ter no máximo 80 caracteres.' })
  neighborhood: string;

  @IsString({ message: 'O campo city (cidade) é obrigatório e deve ser uma string.' })
  @MaxLength(50, { message: 'O campo city (cidade) deve ter no máximo 50 caracteres.' })
  city: string;

  @IsString({ message: 'O campo uf é obrigatório e deve ser uma string.' })
  @Length(2, 2, { message: 'O campo uf deve conter exatamente 2 caracteres.' })
  uf: string;
}
export class UpdateAddressDto extends PartialType(CreateAddressDto) {}
