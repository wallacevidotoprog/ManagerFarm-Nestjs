import { IsEmail, IsString, IsUUID, MinLength } from 'class-validator';

export class AuthDto {
 @IsEmail({}, { message: 'Informe um e-mail válido' })
  email: string;

  @IsString({ message: 'A senha é obrigatória' })
  password: string;
}

export class ActiveAccountDto {
 @IsEmail({}, { message: 'Informe um e-mail válido' })
  email: string;

  @IsString({ message: 'A key é obrigatória' })
  key: string;
}


export class SetPropertytDto {
 @IsUUID()
  id;
}
