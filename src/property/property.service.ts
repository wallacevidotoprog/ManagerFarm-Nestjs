import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'src/Domain/Repository/service-default.repository';
import { Repository } from 'typeorm';
import { PropertyActivitiesEntity } from './entities/property-activities.entity';
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

@Injectable()
export class PropertyActivitiesService extends BaseService<PropertyActivitiesEntity> {
  constructor(
    @InjectRepository(PropertyActivitiesEntity)
    protected readonly repo: Repository<PropertyActivitiesEntity>,
  ) {
    super(repo);
  }
}
