import { Body, Controller, Get, Post, Query, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { RolesGuard } from 'src/auth/Guards/roles.guard';
import {  AuthGuard} from 'src/auth/Guards/auth.guard';
import { BaseController } from 'src/Domain/Repository/controller-default.repository';
import { CreatePropertyDto, UpdatePropertyDto } from './dto/property.dto';
import { PropertyService } from './property.service';
import { Role } from 'src/Domain/Models/Emun/db.enum';
import { Roles } from 'src/common/decorators/roles.decorator';

@UseGuards(AuthGuard, RolesGuard)
@Roles(Role.OWNER,Role.GENERAL_MANAGER)
@Controller('property')
export class PropertyController extends BaseController<CreatePropertyDto, UpdatePropertyDto, any> {
  constructor(private readonly propertyService: PropertyService) {
    super(propertyService as any);
  }
  @Post()
  override create(@Body() dto: CreatePropertyDto, @Req() req: Request): Promise<any> {
    dto.ownerId = req.user?.sub;

    // dto.mapPoints = JSON.stringify(dto.mapPoints)
    return super.create(dto, req);
  }

  @Get()
  override async findAll(
    @Query('page') page = '1',
    @Query('limit') limit = '10',
    @Query() query: Record<string, any>,
    @Req() req: Request,
  ): Promise<{ data: any[]; total: number }> {
    query.ownerId = req.user?.sub;

    // console.log(req.user);

    // console.log(query);

    return await super.findAll(page, limit, query, req);
  }
}
