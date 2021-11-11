import { IsNumber, IsString } from "class-validator";
import { PartialType } from '@nestjs/mapped-types';

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
}