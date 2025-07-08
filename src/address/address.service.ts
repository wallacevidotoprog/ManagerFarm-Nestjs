import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'src/Domain/Repository/service-default.repository';
import { Repository } from 'typeorm';
import { AddressEntity } from './entities/address.entity';

@Injectable()
export class AddressService extends BaseService<AddressEntity> {
  constructor(
    @InjectRepository(AddressEntity)
    protected readonly repo: Repository<AddressEntity>,
  ) {
    super(repo);
  }
}
