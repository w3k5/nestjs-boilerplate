export interface DatabaseEnvironmentConfigurationInterface {
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
}

export interface EnvironmentConfigurationInterface {
  database: DatabaseEnvironmentConfigurationInterface;
}
