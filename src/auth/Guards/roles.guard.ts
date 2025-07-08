import { CanActivate, ExecutionContext, ForbiddenException, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from 'src/common/decorators/roles.decorator';
import { Role } from 'src/Domain/Models/Emun/db.enum';
import { UserRequest } from 'src/Domain/Models/Types/user-req.types';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [context.getHandler(), context.getClass()]);

    if (!requiredRoles || requiredRoles.length === 0) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const user: UserRequest = request.user as UserRequest;
    if (!user || !requiredRoles.includes(user.role)) {
      throw new ForbiddenException('Acesso negado: Permissão insuficiente');
    }

    return true;
  }
}
