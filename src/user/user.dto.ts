import {IsNumber, IsOptional, IsString} from 'class-validator';
import {PartialType} from "@nestjs/swagger";

export class createUserDto {
    @IsNumber()
    @IsOptional()
    id: number;

    @IsString()
    username: string;

    @IsString()
    password: string;
}

export class updateUserDto extends PartialType(createUserDto) {}