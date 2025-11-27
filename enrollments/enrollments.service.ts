import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEnrollmentDto } from './dto/create-enrollment.dto';
import { UpdateEnrollmentDto } from './dto/update-enrollment.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Enrollment } from './entities/enrollment.entity';
import { Repository } from 'typeorm';

 @Injectable()
  export class EnrollmentsService{
     constructor(
         @InjectRepository(Enrollment)
         private readonly enrollmentRepository: Repository<Enrollment>,
     ) {}
 
     async findAll(): Promise<Enrollment[]> {
      return this.enrollmentRepository.find({
    
          relations: ['course'], 
      });
  }
     async create(enrollment: CreateEnrollmentDto){
         const newEnrollment = this.enrollmentRepository.create(enrollment);
         await this.enrollmentRepository.save(newEnrollment);
 
       return{ message: 'Enrollment created successfully', course: newEnrollment };
     }
     async update(id: number, enrollmentData: UpdateEnrollmentDto): Promise<Enrollment> {
       const enrollment = await this.enrollmentRepository.findOne({ where: { id } });
 
         if (!enrollment){
           throw new NotFoundException(`Enrollment with ID ${id} not found`);
         }
         this.enrollmentRepository.merge(enrollment, enrollmentData);
         return this.enrollmentRepository.save(enrollment);
     }
     delete(id: number){
         return this.enrollmentRepository.delete(id);
     }
   }
  