import { Injectable } from '@nestjs/common';
import { CreateBovineDto } from './dto/bovine.dto';

@Injectable()
export class BovineService {
  create(createBovineDto: CreateBovineDto) {
    return 'This action adds a new bovine';
  }

  findAll() {
    return `This action returns all bovine`;
  }

  findOne(id: number) {
    return `This action returns a #${id} bovine`;
  }

  update(id: number, updateBovineDto: CreateBovineDto) {
    return `This action updates a #${id} bovine`;
  }

  remove(id: number) {
    return `This action removes a #${id} bovine`;
  }
}
