import { Module } from '@nestjs/common';
import {UserModule} from "./user/user.module";
import {NoteModule} from "./note/note.module";
import { ConfigModule } from "@nestjs/config";
import config from "./config";
import { DatabaseModule } from "./database/database.module";
import * as Joi from "joi";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      load: [config],
      isGlobal: true,
      validationSchema: Joi.object({
        TYPEORM_USERNAME: Joi.string().required(),
        TYPEORM_PASSWORD: Joi.string().required(),
        TYPEORM_HOST: Joi.string().required(),
        TYPEORM_DATABASE: Joi.string().required(),
        TYPEORM_PORT: Joi.number().required(),
      })
    }),
    DatabaseModule,
    UserModule,
    NoteModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
