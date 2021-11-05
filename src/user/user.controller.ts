import {Body, Controller, Delete, Get, Param, Post, Put} from "@nestjs/common";
import {UserService} from "./user.service";
import {User} from "./user.entity";
import {updateUserDto} from "./user.dto";

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post()
    createUser(@Body() data: User) {
        return this.userService.createUser(data);
    }

    @Get(':id')
    getOne(@Param('id') id: number) {
        return this.userService.getOne(id);
    }

    @Get()
    getAll() {
        return this.userService.getAll();
    }

    @Put()
    update(@Body() data: updateUserDto) {
        return this.userService.update(data)
    }

    @Delete(':id')
    delete(@Param('id') id: number) {
        return this.userService.delete(id);
    }
}