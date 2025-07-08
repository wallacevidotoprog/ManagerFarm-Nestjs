import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GuardModule } from 'src/auth/Guards/guard.module';
import { PropertyEntity } from './entities/property.entity';
import { PropertyController } from './property.controller';
import { PropertyService } from './property.service';

@Module({
  imports: [TypeOrmModule.forFeature([PropertyEntity]), GuardModule],
  controllers: [PropertyController],
  providers: [PropertyService],
})
export class PropertyModule {}
