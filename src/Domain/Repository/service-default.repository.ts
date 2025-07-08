import { BadRequestException, Inject, NotFoundException } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { Request } from 'express';
import { CrudEvent } from 'src/event/historic/event-crud.event';
import { DeepPartial, FindOptionsOrder, FindOptionsWhere, ILike, ObjectLiteral, Repository } from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';
import { ActionModification } from '../Models/Emun/db.enum';
export abstract class BaseService<
  TModel extends ObjectLiteral,
  CreateDto = DeepPartial<TModel>,
  UpdateDto = DeepPartial<TModel>,
  FindWhere = Partial<TModel>,
> {
  @Inject(EventEmitter2)
  protected readonly eventEmitter: EventEmitter2;
  constructor(protected readonly repo: Repository<TModel>) {}

  async create(dto: CreateDto, req: Request): Promise<TModel | null> {
    try {
      const created = this.repo.create(dto as any);
      const entity = Array.isArray(created) ? created[0] : created;
      const result = await this.repo.save(entity);
      this.eventEmitter.emit('crud', new CrudEvent(req, ActionModification.CREATE, this.repo.metadata.tableName, JSON.stringify(result)));
      return null;
    } catch (error) {
      console.error('Erro ao criar entidade:', error);
      throw new BadRequestException(error?.message || 'Erro ao criar entidade');
    }
  }

  async update(id: string, dto: UpdateDto, req: Request): Promise<void> {
    try {
      const existing = await this.findOne(id, req);
      if (!existing) {
        throw new NotFoundException(`Registro com id ${id} não encontrado`);
      }

      await this.repo.update({ id } as unknown as FindOptionsWhere<TModel>, dto as QueryDeepPartialEntity<TModel>);
      this.eventEmitter.emit('crud', new CrudEvent(req, ActionModification.UPDATE, this.repo.metadata.tableName, JSON.stringify(existing)));
    } catch (error) {
      console.error('Erro ao update entidade:', error);
      throw new BadRequestException(error?.message || 'Erro ao update entidade');
    }
  }

  async findOne(id: string, req: Request): Promise<TModel | null> {
    try {
      return this.repo.findOne({
        where: { id } as unknown as FindOptionsWhere<TModel>,
      });
    } catch (error) {
      console.error('Erro ao findOne entidade:', error);
      throw new BadRequestException(error?.message || 'Erro ao findOne entidade');
    }
  }

  async findAll(req: Request, pagination: { page: number; limit: number }, where: Record<string, any> = {}): Promise<{ data: TModel[]; total: number }> {
    try {
      const { page, limit } = pagination;
      const skip = (page - 1) * limit;

      const typeOrmWhere = this.buildTypeOrmWhere(where);

      const [data, total] = await this.repo.findAndCount({
        where: typeOrmWhere,
        take: limit,
        skip,
        // order: { [key as keyof TModel]: 'DESC' } as FindOptionsOrder<TModel>
      });

      return { data, total };
    } catch (error) {
      console.error('Erro ao buscar registros:', error);
      throw new BadRequestException(error?.message || 'Erro ao buscar registros');
    }
  }

  // async findAll(req: Request, where?: FindWhere): Promise<TModel[]> {
  //   try {
  //     if (where) {
  //       const typeOrmWhere = this.buildTypeOrmWhere(where);
  //       return this.repo.find({ where: typeOrmWhere });
  //     }
  //     return this.repo.find();
  //   } catch (error) {
  //     console.error('Erro ao findAll entidade:', error);
  //     throw new BadRequestException(error?.message || 'Erro ao findAll entidade');
  //   }
  // }

  async remove(id: string, req: Request): Promise<void> {
    try {
      const existing = await this.findOne(id, req);
      if (!existing) {
        throw new NotFoundException(`Registro com id ${id} não encontrado`);
      }

      await this.repo.delete({ id } as unknown as FindOptionsWhere<TModel>);
      this.eventEmitter.emit('crud', new CrudEvent(req, ActionModification.UPDATE, this.repo.metadata.tableName, JSON.stringify(existing)));
    } catch (error) {
      console.error('Erro ao remove entidade:', error);
      throw new BadRequestException(error?.message || 'Erro ao remove entidade');
    }
  }

  protected buildTypeOrmWhere<T extends Record<string, any>>(dto: T): FindOptionsWhere<TModel> {
    const where: any = {};

    for (const key in dto) {
      const value = dto[key];
      if (value === undefined || value === null) continue;
      where[key] = typeof value === 'string' ? ILike(`%${value}%`) : value;
    }

    return where;
  }
}
