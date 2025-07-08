import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { InjectRepository } from '@nestjs/typeorm';
import { CrudEvent } from 'src/event/historic/event-crud.event';
import { HistoricModificationEntity } from 'src/historic-modification/entities/historic-modification.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CrudHistoricEventService {
  constructor(
    @InjectRepository(HistoricModificationEntity)
    protected readonly repo: Repository<HistoricModificationEntity>,
  ) {}

  @OnEvent('crud')
  async handleCrudEvent(event: CrudEvent) {
    try {
      const created = {
        userId: event.req.user?.sub,
        action: event.action,
        tableName: event.tableName,
        jsonData: event.jsonData,
      };
      const result = await this.repo.save(created);
    } catch (error) {
      console.error('Erro ao criar entidade:', error);
    }
  }
}
