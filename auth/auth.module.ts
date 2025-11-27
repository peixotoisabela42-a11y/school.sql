 

import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { EmployeeModule } from '../employee/employee.module';
import { JwtModule } from '@nestjs/jwt';  
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    EmployeeModule,
   
    JwtModule.register({
       
      secret: 'yourStrongSecret', 
      
      signOptions: { expiresIn: '1h' }
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService,JwtStrategy],
  exports: [AuthService, JwtModule], 
})
export class AuthModule {}