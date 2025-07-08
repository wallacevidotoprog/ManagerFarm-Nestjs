import { Module } from '@nestjs/common';
import { PropertyActivitiesService, PropertyService } from './property.service';
import { PropertyActivitiesController, PropertyController } from './property.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PropertyEntity } from './entities/property.entity';
import { PropertyActivitiesEntity } from './entities/property-activities.entity';
import { GuardModule } from 'src/auth/Guards/guard.module';

@Module({
    imports: [
      TypeOrmModule.forFeature([PropertyEntity, PropertyActivitiesEntity]),GuardModule
    ],
  controllers: [PropertyController, PropertyActivitiesController],
  providers: [PropertyService, PropertyActivitiesService],
})
export class PropertyModule {}
