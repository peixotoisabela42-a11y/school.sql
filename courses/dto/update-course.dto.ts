 import { IsNotEmpty,IsNumber } from "class-validator";

    export class UpdateCourseDto {
        @IsNotEmpty()
        curso: string;
        @IsNumber()
        @IsNotEmpty()
        value: number;
        @IsNotEmpty()
        description: string;
    }