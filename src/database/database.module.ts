import { Module } from "@nestjs/common";
import config from "../config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigType } from "@nestjs/config";

@Module({
  imports: [
    TypeOrmModule.forRootAsync(
      {
      inject: [config.KEY],
      useFactory: (configService: ConfigType<typeof config>) => {
        return {
          type: 'postgres',
          host: configService.postgres.host,
          username: configService.postgres.username,
          password: configService.postgres.password,
          port: configService.postgres.port,
          database: configService.postgres.database,
          synchronize: true,
          entities: [configService.postgres.entities]
        }
      }
    }
    )
  ],
  providers: [],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}