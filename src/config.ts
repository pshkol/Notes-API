import { registerAs } from "@nestjs/config";

export default registerAs('config', () => {
  return {
    postgres: {
      port: parseInt(process.env.TYPEORM_PORT, 10),
      username: process.env.TYPEORM_USERNAME,
      password: process.env.TYPEORM_PASSWORD,
      database: process.env.TYPEORM_DATABASE,
      host: process.env.TYPEORM_HOST,
      entities: process.env.TYPEORM_ENTITIES,
      migrationsRun: true,
      migrations: process.env.TYPEORM_MIGRATIONS,
      migrationsTableName: process.env.TYPEORM_MIGRATIONS_TABLE_NAME,
      cli: {
        migrationsDir: process.env.TYPEORM_MIGRATIONS_DIR
      }
    }
  }
})