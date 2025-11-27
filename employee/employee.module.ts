 

import { Module } from '@nestjs/common';
 
import { TypeOrmModule } from '@nestjs/typeorm';  
import { Employee } from './entities/employee.entity';  
import { EmployeeService } from './employee.service';

@Module({
  imports: [
    
    TypeOrmModule.forFeature([Employee]), 
  ],
  controllers: [],
  providers: [EmployeeService],
  
  exports: [EmployeeService], 
})
export class EmployeeModule {}