import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'src/Domain/Repository/service-default.repository';
import { Repository } from 'typeorm';
import { EmployeeEntity } from './entities/employee.entity';

@Injectable()
export class EmployeeService extends BaseService<EmployeeEntity> {
  constructor(
    @InjectRepository(EmployeeEntity)
    protected readonly repo: Repository<EmployeeEntity>,
  ) {
    super(repo);
  }
}
