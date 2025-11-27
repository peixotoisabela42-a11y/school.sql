import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateCourseDto {

    @IsNotEmpty()
    curso: string;
    @IsNumber()
    @IsNotEmpty()
    value: number;
    @IsString()
    @IsNotEmpty()
    description: string;
}
