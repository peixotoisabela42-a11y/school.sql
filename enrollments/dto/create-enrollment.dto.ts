import { IsInt, IsNotEmpty, IsNumber } from "class-validator";

export class CreateEnrollmentDto {
    @IsNotEmpty()
    student: string;
    @IsNotEmpty()
    email: string;
    @IsNotEmpty()
    phone: string;
    @IsNumber()
    @IsNotEmpty()
    cpfstudent: number;
    @IsNotEmpty()
    datanascimento: string;
    @IsNotEmpty({ message: 'O ID do curso é obrigatório.' })
    @IsInt({ message: 'O ID do curso deve ser um número inteiro.' })
    courseId: number; // Garanta que o tipo é 'number'
     
}