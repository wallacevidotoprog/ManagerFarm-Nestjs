import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'src/Domain/Repository/service-default.repository';
import { Repository } from 'typeorm';
import { DepartamentEntity } from './entities/department.entity';
import { FunctionsEntity } from './entities/functions .entity';

@Injectable()
export class DepartamentService extends BaseService<DepartamentEntity> {
  
  constructor(
    @InjectRepository(DepartamentEntity)
    protected readonly repo: Repository<DepartamentEntity>,
  ) {
    super(repo);
  }

  async getDescAll() {
    return this.repo.find({ select:{id:true,name:true,functions:true,description:true,functionsList:{id:true,name:true,description:true}}, relations:{functionsList:true,}});
  }
}

@Injectable()
export class FunctionsService extends BaseService<FunctionsEntity> {
  constructor(
    @InjectRepository(FunctionsEntity)
    protected readonly repo: Repository<FunctionsEntity>,
  ) {
    super(repo);
  }
}


