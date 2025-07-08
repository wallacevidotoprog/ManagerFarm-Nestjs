import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DepartamentController,  FunctionsController } from './departament.controller';
import { DepartamentService, FunctionsService } from './departament.service';
import { DepartamentEntity } from './entities/department.entity';
import { FunctionsEntity } from './entities/functions .entity';

@Module({
  controllers: [DepartamentController,  FunctionsController],
  providers: [DepartamentService,  FunctionsService],
  imports: [TypeOrmModule.forFeature([DepartamentEntity,  FunctionsEntity])],
})
export class DepartamentModule {}
