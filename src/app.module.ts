import { Module } from '@nestjs/common';
import { EnvironmentModule } from '@configuration/environment/environment.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [EnvironmentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
