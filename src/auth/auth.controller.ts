import { Body, Controller, Get, HttpCode, HttpStatus, Post, Res, UseGuards } from '@nestjs/common';
import { Response } from 'express';
import { Roles } from 'src/common/decorators/roles.decorator';
import { Role } from 'src/Domain/Models/Emun/db.enum';
import { CreateUserDto } from 'src/user/dto/user.dto';
import { AuthService } from './auth.service';
import { ActiveAccountDto, AuthDto, SetPropertytDto } from './dto/auth.dto';
import { AuthGuard } from './Guards/auth.guard';
import { RolesGuard } from './Guards/roles.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(HttpStatus.ACCEPTED)
  @Post('login')
  async login(@Body() createAuthDto: AuthDto, @Res({ passthrough: true }) res: Response) {
    return await this.authService.aLogin(createAuthDto, res);
  }

  @UseGuards(AuthGuard)
  @HttpCode(HttpStatus.OK)
  @Post('logout')
  async logout(@Res({ passthrough: true }) res: Response) {
    return await this.authService.aLogout(res);
  }

  @HttpCode(HttpStatus.OK)
  @Get('check')
  async checkAuth(@Res({ passthrough: true }) res: Response) {
    return await this.authService.aCheckAuth(res);
  }

  @HttpCode(HttpStatus.OK)
  @Post('register')
  async register(@Body() createDto: CreateUserDto, @Res({ passthrough: true }) res: Response) {
    return await this.authService.aRegister(createDto);
  }

  @HttpCode(HttpStatus.OK)
  @Post('active-account')
  async aActiveAccount(@Body() activeAccountDto: ActiveAccountDto) {
    return await this.authService.aActiveAccount(activeAccountDto);
  }

  @UseGuards(AuthGuard, RolesGuard)
  @Roles(Role.GENERAL_MANAGER,Role.OWNER)
  @HttpCode(HttpStatus.ACCEPTED)
  @Post('set-property')
  async aSetProperty(@Body() dto: SetPropertytDto, @Res({ passthrough: true }) res: Response) {
    return await this.authService.aSetProperty(dto, res);
  }

  @UseGuards(AuthGuard)
  @HttpCode(HttpStatus.OK)
  @Get('role')
  async aRole(@Res({ passthrough: true }) res: Response) {
    return await this.authService.aRole(res);
  }
}
