import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { EmployeeService } from '../employee/employee.service'; // 💡 Nova importação

@Injectable()
export class AuthService {
constructor(
 
private employeeService: EmployeeService, 
private jwtService: JwtService
) {}

async signIn(
 useremail: string,
 pass: string,
): Promise<{ access_token: string }> {
 
 const user = await this.employeeService.findOneByEmail(useremail); 
    
    if (!user) {
        throw new UnauthorizedException('Credenciais inválidas');
    }

     
    const isPasswordValid = await bcrypt.compare(pass, user.password);

if (!isPasswordValid) { 
throw new UnauthorizedException('Senha incorreta');
}
     
const payload = { sub: user.id, useremail: user.useremail };
return {
access_token: await this.jwtService.signAsync(payload),
};
}
}