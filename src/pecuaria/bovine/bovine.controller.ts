import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { BovineService } from './bovine.service';
import { CreateBovineDto } from './dto/bovine.dto';

@Controller('bovine')
export class BovineController {
  constructor(private readonly bovineService: BovineService) {}

  @Post()
  create(@Body() createBovineDto: CreateBovineDto) {
    return this.bovineService.create(createBovineDto);
  }

  @Get()
  findAll() {
    return this.bovineService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bovineService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBovineDto: CreateBovineDto) {
    return this.bovineService.update(+id, updateBovineDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bovineService.remove(+id);
  }
}
