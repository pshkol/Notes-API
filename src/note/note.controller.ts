import {Body, Controller, Delete, Get, Param, Post, Put} from "@nestjs/common";
import {createNoteDto, updateNoteDto} from "./note.dto";
import {Note} from "./note.entity";
import {DeleteResult, UpdateResult} from "typeorm";
import {NoteService} from "./note.service";

@Controller('note')
export class NoteController {
    constructor(private readonly noteService: NoteService) {}

    @Post()
    create(@Body() data: createNoteDto): Promise<Note> {
        return this.noteService.create(data);
    }

    @Get(':id')
    getOne(@Param('id') id: number): Promise<Note> {
        return this.noteService.getOne(id);
    }

    @Get()
    getAll(): Promise<Note[]> {
        return this.noteService.getAll()
    }

    @Put()
    update(@Body() data: updateNoteDto): Promise<UpdateResult> {
        return this.noteService.update(data);
    }

    @Delete(':id')
    delete(@Param('id') id: number): Promise<DeleteResult> {
        return this.noteService.delete(id)
    }
}