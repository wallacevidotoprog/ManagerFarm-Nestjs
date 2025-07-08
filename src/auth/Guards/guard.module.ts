import { Module } from '@nestjs/common';
import { RolesGuard } from './roles.guard';
import { AuthGuard } from './auth.guard';
import { AppConfigModule } from 'src/common/config/app-config.module';
import { AuthModule } from '../auth.module';

@Module({
  imports: [AuthModule, AppConfigModule],
  providers: [RolesGuard,AuthGuard],
  exports: [RolesGuard,AuthGuard,AuthModule,AppConfigModule],
})
export class GuardModule {}
