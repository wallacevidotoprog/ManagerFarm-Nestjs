import { MailerModule } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddressEntity } from 'src/address/entities/address.entity';
import { DepartamentEntity } from 'src/departament/entities/department.entity';
import { FunctionsEntity } from 'src/departament/entities/functions .entity';
import { EmployeeEntity } from 'src/employee/entities/employee.entity';
import { HistoricModificationEntity } from 'src/historic-modification/entities/historic-modification.entity';
import { AreaEntity } from 'src/pecuaria/bovine/entities/area.entity';
import { BovineEntity } from 'src/pecuaria/bovine/entities/bovine.entity';
import { BreedEntity } from 'src/pecuaria/bovine/entities/breed.entity';
import { VaccineEntity } from 'src/pecuaria/bovine/entities/vaccine.entity';
import { PropertyEntity } from 'src/property/entities/property.entity';
import { UserEntity } from 'src/user/entities/user.entity';
import { AppConfigEnv } from './app-config.env';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    // TypeOrmModule.forRootAsync({
    //   imports: [AppConfigModule],
    //   inject: [AppConfigEnv],
    //   useFactory: (config: AppConfigEnv) => {
    //     return {
    //       type: 'postgres',
    //       host: config.DB_HOST,
    //       port: config.DB_PORT || 5432,
    //       username: config.DB_USERNAME,
    //       password: config.DB_PASSWORD,
    //       database: config.DB_DATABASE,
    //       entities: [
    //         UserEntity,
    //         AddressEntity,
    //         EmployeeEntity,
    //         ActivityEntity,
    //         DepartamentEntity,
    //         FunctionsEntity,
    //         PropertyEntity,
    //         PropertyActivitiesEntity,
    //         HistoricModificationEntity,
    //         BovineEntity,
    //         AreaEntity,
    //         VaccineEntity,
    //         BreedEntity,
    //       ],
    //       synchronize: true,
    //       autoLoadEntities: true,
    //       ssl:{
    //         rejectUnauthorized:true,
    //         ca: fs.readFileSync(path.resolve(process.cwd(), 'src/certs/ca.pem')).toString(),
    //       }
    //       // logging: true,

    //     };
    //   },
    // }),
    TypeOrmModule.forRootAsync({
      imports: [AppConfigModule],
      inject: [AppConfigEnv],
      useFactory: (config: AppConfigEnv) => {
        const baseConfig: any = {
          type: 'postgres',
          host: config.DB_HOST,
          port: config.DB_PORT || 5432,
          username: config.DB_USERNAME,
          password: config.DB_PASSWORD,
          database: config.DB_DATABASE,
          entities: [
            UserEntity,
            AddressEntity,
            EmployeeEntity,
            DepartamentEntity,
            FunctionsEntity,
            PropertyEntity,
            HistoricModificationEntity,
            BovineEntity,
            AreaEntity,
            VaccineEntity,
            BreedEntity,
          ],
          synchronize: true,
          autoLoadEntities: true,
          // logging: true,
        };

        
        if (config.DB_SSL_CHECKED) {
          baseConfig.ssl = {
            rejectUnauthorized: true,
            ca: config.DB_SSL,
            // config.DB_SSL
            // fs.readFileSync(path.resolve(process.cwd(), 'src/certs/ca.pem')).toString(),
          };
        }

        return baseConfig;
      },
    }),
    MailerModule.forRootAsync({
      imports: [AppConfigModule],
      inject: [AppConfigEnv],
      useFactory: (config: AppConfigEnv) => {
        return {
          transport: {
            host: config.HOST_EMAIL, // ex: smtp.gmail.com
            port: config.PORT_EMAIL, // ou 465 para SSL
            secure: config.SECURE_EMAIL, // true para SSL (465), false para TLS (587)
            auth: {
              user: config.AUTH_USER_EMAIL,
              pass: config.AUTH_PASS_EMAIL,
            },
          },
          defaults: {
            from: `"Manager Farm" <${config.HOST_EMAIL}>`,
          },
        };
      },
    }),
  ],

  providers: [AppConfigEnv],
  exports: [AppConfigEnv],
})
export class AppConfigModule {}
