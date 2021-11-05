import {User} from "../user/user.entity";
import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Note {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    text: string;

    @ManyToOne(type => User, users => users.notes)
    user: User
}