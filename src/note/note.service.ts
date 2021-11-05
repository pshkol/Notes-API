import {Injectable} from "@nestjs/common";
import {createNoteDto, updateNoteDto} from "./note.dto";
import {Note} from "./note.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {DeleteResult, Repository, UpdateResult} from "typeorm";
import {UserService} from "../user/user.service";

@Injectable()
export class NoteService {
    constructor(
        @InjectRepository(Note) private noteRepo: Repository<Note>,
        private readonly userService: UserService
    ) {}

    async create(data: createNoteDto): Promise<Note> {
        const user = await this.userService.getOne(data.userId);

        const newNote = this.noteRepo.create({...data});
        newNote.user = user;
        return this.noteRepo.save(newNote);
    }

    getAll(): Promise<Note[]> {
        return this.noteRepo.find({relations:['user']});
    }

    getOne(id: number): Promise<Note> {
        return this.noteRepo.findOne(id, {relations: ['user']});
    }

    update(data: updateNoteDto): Promise<UpdateResult> {
        return this.noteRepo.update(data.id, {...data})
    }

    delete(id:number): Promise<DeleteResult> {
        return this.noteRepo.delete(id);
    }

}