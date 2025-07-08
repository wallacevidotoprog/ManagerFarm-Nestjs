import { Body, Controller, Get, Post, Query, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { BaseController } from 'src/Domain/Repository/controller-default.repository';
import { CreatePropertyActivitiesDto, UpdatePropertyActivitiesDto } from './dto/property-activities.dto';
import { CreatePropertyDto, UpdatePropertyDto } from './dto/property.dto';
import { PropertyActivitiesService, PropertyService } from './property.service';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from 'src/auth/Guards/roles.guard';

@UseGuards(AuthGuard,RolesGuard)
// @Roles(Role.OWNER)
@Controller('property')
export class PropertyController extends BaseController<CreatePropertyDto, UpdatePropertyDto, any> {
  constructor(private readonly propertyService: PropertyService) {
    super(propertyService as any);
  }
  @Post()
  override create(@Body() dto: CreatePropertyDto, @Req() req: Request): Promise<any> {
    dto.ownerId = req.user?.sub;
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

   console.log(req.user);
   
   console.log(query);
   
    return await super.findAll(page, limit, query, req);
  }
}
@Controller('property-activities')
export class PropertyActivitiesController extends BaseController<CreatePropertyActivitiesDto, UpdatePropertyActivitiesDto, any> {
  constructor(private readonly propertyActivitiesService: PropertyActivitiesService) {
    super(propertyActivitiesService);
  }
}
