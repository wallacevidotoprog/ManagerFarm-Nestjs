import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'src/Domain/Repository/service-default.repository';
import { Repository } from 'typeorm';
import { PropertyEntity } from './entities/property.entity';

@Injectable()
export class PropertyService extends BaseService<PropertyEntity> {
  constructor(
    @InjectRepository(PropertyEntity)
    protected readonly repo: Repository<PropertyEntity>,
  ) {
    super(repo);
  }
}
