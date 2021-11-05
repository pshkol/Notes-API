import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Note} from "../note/note.entity";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    password: string;

    @OneToMany(type => Note, notes => notes.user)
    notes: Note[]
}