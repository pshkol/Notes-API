import {Injectable} from "@nestjs/common";
import {createUserDto, updateUserDto} from "./user.dto";
import {User} from "./user.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository, UpdateResult} from "typeorm";

let users = [];

@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private userRepo: Repository<User>) {}

    createUser(data: createUserDto): Promise<User> {
        const newUser = this.userRepo.create(data);
        return this.userRepo.save(newUser);
    }

    getAll(): Promise<User[]> {
        return this.userRepo.find({relations: ['notes']})
    }

    getOne(id: number): Promise<User> {
        return this.userRepo.findOne(id);
    }

    update(data: updateUserDto): Promise<UpdateResult> {
        return this.userRepo.update(data.id, {...data})
    }

    delete(id) {
        return this.userRepo.delete(id)
    }

    async getOneByUsername(username: string): Promise<User> {
        return await this.userRepo.findOne({username: username})
    }
}