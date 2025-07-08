import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { HistoricModificationService } from './historic-modification.service';

@Controller('historic-modification')
export class HistoricModificationController {
  constructor(private readonly historicModificationService: HistoricModificationService) {}

  // @Post()
  // create(@Body() createHistoricModificationDto: CreateHistoricModificationDto) {
  //   return this.historicModificationService.create(createHistoricModificationDto);
  // }

  // @Get()
  // findAll() {
  //   return this.historicModificationService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.historicModificationService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateHistoricModificationDto: UpdateHistoricModificationDto) {
  //   return this.historicModificationService.update(+id, updateHistoricModificationDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.historicModificationService.remove(+id);
  // }
}
