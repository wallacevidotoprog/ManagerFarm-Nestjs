import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateUserDto ,UpdateUserDto} from './dto/user.dto';
import { UserService } from './user.service';
import { BaseController } from 'src/Domain/Repository/controller-default.repository';

@Controller('user')
export class UserController extends BaseController<CreateUserDto,UpdateUserDto,any> {
  constructor(private readonly userService: UserService) {
    super(userService as any);
  }
}
