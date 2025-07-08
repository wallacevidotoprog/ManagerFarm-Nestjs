import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { AppConfigEnv } from 'src/common/config/app-config.env';
import { IS_PUBLIC_KEY } from 'src/common/decorators/public.decorator';

@Injectable()
export class AuthGuard implements CanActivate {
  private jwtSecret!: string;
  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: AppConfigEnv,
    private readonly reflector: Reflector,
  ) {
    const secret = configService.JWT_SECRET;
    if (!secret) {
      throw new Error('JWT_SECRET is not defined in the configuration');
    }
    this.jwtSecret = secret;
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    if (this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [context.getHandler(), context.getClass()])) {
      return true;
    }

    const request = context.switchToHttp().getRequest<Request>();

    const extractTokenFromRequest = () => {
      const [type, token] = request.headers.authorization?.split(' ') ?? [];

      if (type === 'Bearer' && token) return token;

      if (request.cookies?.Authorization) return request.cookies.Authorization;
    };

    const token = extractTokenFromRequest();

    if (!token) {
      throw new UnauthorizedException();
    }
    try {
      const payload = await this.jwtService.verifyAsync(token, {
        secret: this.jwtSecret,
      });

      request.user = payload
    } catch (error) {
      throw new UnauthorizedException(error);
    }

    return true;
  }
}
