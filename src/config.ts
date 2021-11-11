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
    },
    secretKey: process.env.SECRET_KEY
  }
})