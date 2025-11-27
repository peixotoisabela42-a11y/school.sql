 
import { IsString, IsEmail } from 'class-validator';

export class SignInDto {
  @IsEmail()
  useremail: string;

  @IsString()
  password: string;
}


