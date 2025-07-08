import { Injectable, NotAcceptableException, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { compare, hash } from 'bcrypt';
import { plainToInstance } from 'class-transformer';
import { Response } from 'express';
import { Role } from 'src/Domain/Models/Emun/db.enum';
import { UserRequest } from 'src/Domain/Models/Types/user-req.types';
import { EmployeeEntity } from 'src/employee/entities/employee.entity';
import { PropertyEntity } from 'src/property/entities/property.entity';
import { CreateUserDto } from 'src/user/dto/user.dto';
import { UserEntity } from 'src/user/entities/user.entity';
import { UserKeyEvent, UserRegisteredEvent } from 'src/user/event/user-registered.event';
import { Repository } from 'typeorm';
import { ActiveAccountDto, AuthDto, SetPropertytDto } from './dto/auth.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    @InjectRepository(PropertyEntity)
    private readonly propertyRepository: Repository<PropertyEntity>,
    @InjectRepository(EmployeeEntity)
    private readonly employeeRepository: Repository<EmployeeEntity>,
    private readonly jwtService: JwtService,
    private eventEmitter: EventEmitter2,
  ) {}

  public async aLogin(createAuthDto: AuthDto, res: Response) {
    const user = await this.userRepository.findOne({
      where: { email: createAuthDto.email },
    });

    if (!user || !compare(createAuthDto.password, user.password)) {
      throw new UnauthorizedException('Credencial inválida.');
    }

    if (!user.active) {
      throw new NotAcceptableException('Usuário não ativo.');
    }

    let tempPropId: string | null = null;

    if (user.role === Role.GENERAL_MANAGER) {
      tempPropId = null;
    } else if (user.role === Role.OWNER) {
      const property = await this.propertyRepository.findOne({
        where: { ownerId: user.id },
      });

      if (!property || !property.id) {
        tempPropId = null;
        // throw new NotFoundException('Propriedade não encontrada para este usuário.');
      }
      tempPropId = property?.id ?? null;
    } else {
      const employee = await this.employeeRepository.findOne({
        where: { id: user.employeeId },
      });
      if (!employee || !employee.propertyId) {
        throw new NotFoundException('Propriedade não encontrada para este usuário.');
      }
      tempPropId = employee.propertyId;
    }

    const payload: UserRequest = {
      sub: user.id,
      email: user.email,
      role: user.role,
      propertyId: tempPropId ?? '',
    };
    const token = this.jwtService.sign(payload);

    res.cookie('Authorization', token, {
      httpOnly: true,
      secure: true,
      sameSite: 'none',
      maxAge: 24 * 60 * 60 * 1000,
    });
    return {
      user_name: user.name,
      role: user.role,
    };
  }

  public async aLogout(res: Response<any, Record<string, any>>) {
    res.clearCookie('Authorization', {
      httpOnly: true,
      secure: true,
      sameSite: 'none',
      maxAge: 24 * 60 * 60 * 1000,
    });
    return;
  }

  public async aCheckAuth(res: Response<any, Record<string, any>>) {
    const token = res.req.cookies['Authorization'];
    if (!token) {
      throw new UnauthorizedException('Token não encontrado');
    }

    try {
      const payload = this.jwtService.verify(token);
      return payload;
    } catch (error) {
      throw new UnauthorizedException('Token inválido');
    }
  }

  public async aRegister(createAuthDto: CreateUserDto) {
    const user = await this.userRepository.findOne({
      where: [{ email: createAuthDto.email }, { cpf: createAuthDto.cpf }],
    });
    if (user) {
      throw new UnauthorizedException('Usuário já cadastrado');
    }

    const hashedPassword = await hash(createAuthDto.password, 10);
    const userEntity = plainToInstance(UserEntity, {
      ...createAuthDto,
      role: Role.OWNER,
      active: false,
      password: hashedPassword,
    });

    const newUser = await this.userRepository.save(userEntity);

    this.eventEmitter.emit('user.key', new UserKeyEvent(createAuthDto.email, createAuthDto.name, newUser.id.split('-')[0]));

    return 'OK BROT';
  }

  public async aActiveAccount(activeAccountDto: ActiveAccountDto) {
    const user = await this.userRepository.findOne({
      where: [{ email: activeAccountDto.email }],
    });

    if (!user) {
      throw new Error('Usuário não cadastrado.');
    }
    const key = user.id.split('-')[0];

    if (key != activeAccountDto.key) {
      throw new Error('Key inválida..');
    }

    await this.userRepository.update(user.id, { active: true });

    this.eventEmitter.emit('user.registered', new UserRegisteredEvent(user.email, user.name));
  }

  public async aSetProperty(dto: SetPropertytDto, res: Response) {
    const token = res.req.cookies['Authorization'];
    if (!token) {
      throw new UnauthorizedException('Token não encontrado');
    }

    const payload: UserRequest = this.jwtService.verify(token);

    const property = await this.propertyRepository.findOne({
      where: { id: dto.id },
    });

    if (!property || !property.id) {
      throw new NotFoundException('Propriedade não encontrada.');
    }
    const payloadToken: UserRequest = {
      sub: payload.sub,
      email: payload.email,
      role: payload.role,
      propertyId: property.id,
    };
    const newToken = this.jwtService.sign(payloadToken);
    res.cookie('Authorization', newToken, {
      httpOnly: true,
      secure: true,
      sameSite: 'none',
      maxAge: 24 * 60 * 60 * 1000,
    });
  }

  public async aRole(res: Response) {
    const token = res.req.cookies['Authorization'];
    if (!token) {
      throw new UnauthorizedException('Token não encontrado');
    }

    const payload: UserRequest = this.jwtService.verify(token);

    return payload.role;
  }
}
