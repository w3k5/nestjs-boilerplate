import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { EnvironmentModule } from './configuration/environment/environment.module';

@Module({
  imports: [EnvironmentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
