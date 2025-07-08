import { Module } from '@nestjs/common';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { AddressModule } from './address/address.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { AppConfigModule } from './common/config/app-config.module';
import { DepartamentModule } from './departament/departament.module';
import { EmployeeModule } from './employee/employee.module';
import { HistoricModificationModule } from './historic-modification/historic-modification.module';
import { PropertyModule } from './property/property.module';
import { MailService } from './service/mail-service/mail-service.service';
import { UserModule } from './user/user.module';
// import { UserMiddleware } from './common/middleware/user.middleware';
import { BovineModule } from './pecuaria/bovine/bovine.module';

@Module({
  imports: [
    AppConfigModule,
    UserModule,
    PropertyModule,
    AddressModule,
    EmployeeModule,
    DepartamentModule,
    HistoricModificationModule,
    AuthModule,

    EventEmitterModule.forRoot(),

    BovineModule,
  ],
  controllers: [AppController],
  providers: [AppService, MailService],
})
export class AppModule {
  //  configure(consumer: MiddlewareConsumer) {
  //   consumer.apply(UserMiddleware).forRoutes('*');
  // }
}
