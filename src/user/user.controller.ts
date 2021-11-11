import {Body, Controller, Delete, Get, Param, Post, Put} from "@nestjs/common";
import {UserService} from "./user.service";
import {User} from "./user.entity";
import { createUserDto, updateUserDto } from "./user.dto";
import { DeleteResult, UpdateResult } from "typeorm";

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post()
    createUser(@Body() data: createUserDto): Promise<User> {
        return this.userService.createUser(data);
    }

    @Get(':id')
    getOne(@Param('id') id: number): Promise<User> {
        return this.userService.getOne(id);
    }

    @Get()
    getAll(): Promise<User[]> {
        return this.userService.getAll();
    }

    @Put()
    update(@Body() data: updateUserDto): Promise<UpdateResult> {
        return this.userService.update(data)
    }

    @Delete(':id')
    delete(@Param('id') id: number): Promise<DeleteResult> {
        return this.userService.delete(id);
    }
}