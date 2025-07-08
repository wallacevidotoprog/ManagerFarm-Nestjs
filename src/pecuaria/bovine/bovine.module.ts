import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BovineController } from './bovine.controller';
import { BovineService } from './bovine.service';
import { AreaEntity } from './entities/area.entity';
import { BovineEntity } from './entities/bovine.entity';
import { BreedEntity } from './entities/breed.entity';
import { VaccineEntity } from './entities/vaccine.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BovineEntity, AreaEntity, VaccineEntity, BreedEntity])],
  controllers: [BovineController],
  providers: [BovineService],
})
export class BovineModule {}
