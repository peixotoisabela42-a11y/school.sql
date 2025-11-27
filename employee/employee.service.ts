  

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Employee } from './entities/employee.entity';
 
import { CreateEmployeeDto } from './dto/create-employee.dto'; 
import { UpdateEmployeeDto } from './dto/update-employee.dto';

@Injectable()
export class EmployeeService {
    constructor(
        @InjectRepository(Employee) 
        private employeeRepository: Repository<Employee>,
    ) {}

   
    async create(createEmployeeDto: CreateEmployeeDto): Promise<Employee> {
        
        const newEmployee = this.employeeRepository.create(createEmployeeDto);
        return this.employeeRepository.save(newEmployee);
    }

  
    findAll(): Promise<Employee[]> {
        return this.employeeRepository.find();
    }

    
    async findOne(id: number): Promise<Employee> {
        const employee = await this.employeeRepository.findOne({ where: { id } });
        if (!employee) {
            throw new NotFoundException(`Funcionário com ID ${id} não encontrado.`);
        }
        return employee;
    }

     
    async findOneByEmail(useremail: string): Promise<Employee | undefined> {
        const employee = await this.employeeRepository.findOne({ 
            where: { useremail: useremail } 
        });
        return employee ?? undefined;
    }

    
    async update(id: number, updateEmployeeDto: UpdateEmployeeDto): Promise<Employee> {
        await this.employeeRepository.update(id, updateEmployeeDto);
        return this.findOne(id);
    }

     
    async remove(id: number): Promise<void> {
        const result = await this.employeeRepository.delete(id);
        if (result.affected === 0) {
            throw new NotFoundException(`Funcionário com ID ${id} não encontrado.`);
        }
    }
}