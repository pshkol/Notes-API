import {IsNumber, IsOptional, IsString} from "class-validator";
import {PartialType} from "@nestjs/swagger";

export class createNoteDto {
    @IsString()
    title: string;

    @IsString()
    text: string;

    @IsNumber()
    userId: number;
}

export class updateNoteDto extends PartialType(createNoteDto) {
    @IsNumber()
    id: number;

    @IsOptional()
    @IsString()
    title: string;

    @IsOptional()
    @IsString()
    text: string;

    @IsOptional()
    @IsNumber()
    userId: number;
}