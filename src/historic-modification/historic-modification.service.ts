import { Injectable } from '@nestjs/common';
import { CreateHistoricModificationDto,UpdateHistoricModificationDto } from './dto/historic-modification.dto';

@Injectable()
export class HistoricModificationService {
  create(createHistoricModificationDto: CreateHistoricModificationDto) {
    return 'This action adds a new historicModification';
  }

  findAll() {
    return `This action returns all historicModification`;
  }

  findOne(id: number) {
    return `This action returns a #${id} historicModification`;
  }

  update(id: number, updateHistoricModificationDto: UpdateHistoricModificationDto) {
    return `This action updates a #${id} historicModification`;
  }

  remove(id: number) {
    return `This action removes a #${id} historicModification`;
  }
}
