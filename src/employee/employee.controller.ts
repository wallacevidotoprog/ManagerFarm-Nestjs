import { Body, Controller, NotFoundException, Post, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { AuthGuard } from 'src/auth/Guards/auth.guard';
import { RolesGuard } from 'src/auth/Guards/roles.guard';
import { Roles } from 'src/common/decorators/roles.decorator';
import { Role } from 'src/Domain/Models/Emun/db.enum';
import { UserRequest } from 'src/Domain/Models/Types/user-req.types';
import { BaseController } from 'src/Domain/Repository/controller-default.repository';
import { CreateEmployeeDto, UpdateEmployeeDto } from './dto/employee.dto';
import { EmployeeService } from './employee.service';

@UseGuards(AuthGuard, RolesGuard)
@Roles(Role.OWNER, Role.MANAGER, Role.ADMIN, Role.GENERAL_MANAGER)
@Controller('employee')
export class EmployeeController extends BaseController<CreateEmployeeDto, UpdateEmployeeDto, any> {
  constructor(private readonly employeeService: EmployeeService) {
    super(employeeService as any);
  }

  @Post()
  override create(@Body() dto: CreateEmployeeDto, @Req() req: Request) {
    const user = req?.user as UserRequest;
    console.log('user:', user);

    if (!user || !user.propertyId) {
      throw new NotFoundException('Propriedade não encontrada para o seu usuário.');
    }
    dto.propertyId = user.propertyId;

    return super.create(dto, req);
  }
}
