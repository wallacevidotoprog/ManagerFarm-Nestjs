import { Module } from '@nestjs/common';
import { HistoricModificationService } from './historic-modification.service';
import { HistoricModificationController } from './historic-modification.controller';
import { CrudHistoricEventService } from 'src/service/crud-historic-event/crud-historic-event.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HistoricModificationEntity } from './entities/historic-modification.entity';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { MailerModule } from '@nestjs-modules/mailer';

@Module({
  imports: [
    TypeOrmModule.forFeature([HistoricModificationEntity]),
    EventEmitterModule.forRoot(), 
  ],
  controllers: [HistoricModificationController],
  providers: [HistoricModificationService,CrudHistoricEventService],
  exports: [CrudHistoricEventService],
})
export class HistoricModificationModule {}
