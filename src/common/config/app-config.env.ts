import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppConfigEnv {
  constructor(private readonly config: ConfigService) {}


  // CONECT DB
  get DB_HOST(): string {
    return this.requireEnv(this.config.get<string>('DB_HOST'), 'DB_HOST');
  }
  get DB_PORT(): number {
    return this.requireEnv(this.config.get<number>('DB_PORT'), 'DB_PORT');
  }
  get DB_USERNAME(): string {
    return this.requireEnv(this.config.get<string>('DB_USERNAME'), 'DB_USERNAME');
  }
  get DB_PASSWORD(): string {
    return this.requireEnv(this.config.get<string>('DB_PASSWORD'), 'DB_PASSWORD');
  }
  get DB_DATABASE(): string {
    return this.requireEnv(this.config.get<string>('DB_DATABASE'), 'DB_DATABASE');
  }
   get DB_SSL_CHECKED(): boolean {

    const ttx =  this.requireEnv(this.config.get<string>('DB_SSL_CHECKED'), 'DB_SSL_CHECKED');

    return ttx === 'true'? true : false
  }

   get DB_SSL(): string {
    return this.requireEnv(this.config.get<string>('DB_SSL'), 'DB_SSL');
  }

  get JWT_SECRET(): string {
    return this.requireEnv(this.config.get<string>('JWT_SECRET'), 'JWT_SECRET');
  }

  
// SEND EMAIL
  get HOST_EMAIL(): string {
    return this.requireEnv(this.config.get<string>('HOST_EMAIL'), 'HOST_EMAIL');
  }
    get PORT_EMAIL(): number {
    return this.requireEnv(this.config.get<number>('PORT_EMAIL'), 'PORT_EMAIL');
  }
    get SECURE_EMAIL(): string {
    return this.requireEnv(this.config.get<string>('SECURE_EMAIL'), 'SECURE_EMAIL');
  }
    get AUTH_USER_EMAIL(): string {
    return this.requireEnv(this.config.get<string>('AUTH_USER_EMAIL'), 'AUTH_USER_EMAIL');
  }
    get AUTH_PASS_EMAIL(): string {
    return this.requireEnv(this.config.get<string>('AUTH_PASS_EMAIL'), 'AUTH_PASS_EMAIL');
  }





  private requireEnv<T>(value: T | undefined, key: string): T {
    if (value === undefined || value === null) throw new Error(`Variável de ambiente ${key} não definida`);
    return value;
  }
}
