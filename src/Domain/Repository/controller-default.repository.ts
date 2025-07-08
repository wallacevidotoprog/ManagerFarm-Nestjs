import { Body, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Query, Req } from '@nestjs/common';
import { Request } from 'express';

export abstract class BaseController<CreateDto, UpdateDto, FindWhere = any> {
  constructor(
    protected readonly service: {
      create: (dto: CreateDto, req: Request) => Promise<any>;
      update: (id: string, dto: UpdateDto, req: Request) => Promise<any>;
      findOne: (id: string, req: Request) => Promise<any>;
      findAll: (req: Request,pagination: { page: number; limit: number }, where: FindWhere) => Promise<{ data: any[]; total: number }>;
      // findAll: (req: Request, where?: FindWhere) => Promise<any[]>;
      remove: (id: string, req: Request) => Promise<any>;
    },
  ) {}

  @HttpCode(HttpStatus.CREATED)
  @Post()
  async create(@Body() dto: CreateDto, @Req() req: Request) {
    return this.service.create(dto, req);
  }

  @HttpCode(HttpStatus.OK)
  @Patch(':id')
  async update(@Param('id') id: string, @Body() dto: UpdateDto, @Req() req: Request) {
    return this.service.update(id, dto, req);
  }

  @HttpCode(HttpStatus.OK)
  @Get(':id')
  async findOne(@Param('id') id: string, @Req() req: Request) {
    return this.service.findOne(id, req);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  async findAll(@Query('page') page = '1', @Query('limit') limit = '10', @Query() query: Record<string, any>,@Req() req: Request) {
    // Remove page e limit dos filtros
    const { page: _p, limit: _l, ...filters } = query;

    return this.service.findAll(
      req,
      {
        
        page: parseInt(page, 10),
        limit: parseInt(limit, 10),
      },
      filters as FindWhere,
    );
  }
  // @HttpCode(HttpStatus.OK)
  // @Get()
  // async findAll(@Query() where: FindWhere, @Req() req: Request) {
  //   return this.service.findAll(req, where);
  // }

  @HttpCode(HttpStatus.ACCEPTED)
  @Delete(':id')
  async delete(@Param('id') id: string, @Req() req: Request) {
    return this.service.remove(id, req);
  }
}
