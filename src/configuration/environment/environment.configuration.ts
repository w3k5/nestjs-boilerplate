import { EnvironmentConfigurationInterface } from './environment.interface';

export default (): EnvironmentConfigurationInterface => ({
  database: {
    host: process.env.DATABASE_HOST as string,
    port: Number(process.env.DATABASE_PORT),
    username: process.env.DATABASE_USERNAME as string,
    password: process.env.DATABASE_PASSWORD as string,
    database: process.env.DATABASE_NAME as string,
  },
});
