import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

import { EventEmitterModule } from '@nestjs/event-emitter';

import { TypeOrmModule } from '@nestjs/typeorm';

import { ActivitiesModule } from './activities/activities.module';
import { AddressModule } from './address/address.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';

import { AppConfigEnv } from './common/config/app-config.env';

import { AppConfigModule } from './common/config/app-config.module';
import { DepartamentModule } from './departament/departament.module';
import { EmployeeModule } from './employee/employee.module';
import { HistoricModificationModule } from './historic-modification/historic-modification.module';
import { PropertyModule } from './property/property.module';
import { MailService } from './service/mail-service/mail-service.service';
import { UserModule } from './user/user.module';
import { CrudHistoricEventService } from './service/crud-historic-event/crud-historic-event.service';
// import { UserMiddleware } from './common/middleware/user.middleware';
import { BovineModule } from './pecuaria/bovine/bovine.module';

@Module({
  imports: [
    AppConfigModule,   
    UserModule,
    PropertyModule,
    ActivitiesModule,
    AddressModule,
    EmployeeModule,
    DepartamentModule,
    HistoricModificationModule,
    AuthModule,

    EventEmitterModule.forRoot(),

    BovineModule,
  ],
  controllers: [AppController],
  providers: [AppService, MailService,],
})
export class AppModule {

  //  configure(consumer: MiddlewareConsumer) {
  //   consumer.apply(UserMiddleware).forRoutes('*'); 
  // }
}
