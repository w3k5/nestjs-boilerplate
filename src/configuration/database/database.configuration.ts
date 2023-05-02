import { ConfigService } from '@nestjs/config';
import type { TypeOrmModuleOptions } from '@nestjs/typeorm';

import type {
  DatabaseEnvironmentConfigurationInterface,
  EnvironmentConfigurationInterface,
} from '@configuration/environment/environment.interface';

export default (
  configService: ConfigService<EnvironmentConfigurationInterface>,
): TypeOrmModuleOptions => {
  const databaseConfig: DatabaseEnvironmentConfigurationInterface =
    configService.get('database');

  return {
    type: 'postgres',
    autoLoadEntities: true,
    synchronize: true,
    ...databaseConfig,
  };
};
