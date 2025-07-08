import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { UserRequest } from 'src/Domain/Models/Types/user-req.types';

export const UserReq = createParamDecorator((data: UserRequest, ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest();
   return request.user;
});