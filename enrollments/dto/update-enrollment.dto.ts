import { IsString, IsNotEmpty, IsEmail, IsDateString } from 'class-validator';
 

export class UpdateEnrollmentDto { 
   
    @IsString()
    @IsNotEmpty()
    studentname: string;

    @IsEmail()
    @IsNotEmpty()
    studentemail: string;

  
    @IsString()
    @IsNotEmpty()
    studentCpf: string;

    @IsString()
    @IsNotEmpty()
    phone: string;
 
    @IsDateString()
    @IsNotEmpty()
    birthdate: string;
}