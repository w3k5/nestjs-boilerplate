import { Module } from '@nestjs/common';

import { DatabaseModule } from '@configuration/database/database.module';
import { EnvironmentModule } from '@configuration/environment/environment.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [EnvironmentModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
