import {Module} from "@nestjs/common";
import {NoteController} from "./note.controller";
import {NoteService} from "./note.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Note} from "./note.entity";
import {UserModule} from "../user/user.module";

@Module({
  imports: [TypeOrmModule.forFeature([Note]), UserModule],
  controllers: [NoteController],
  providers: [NoteService]
})

export class NoteModule {

}