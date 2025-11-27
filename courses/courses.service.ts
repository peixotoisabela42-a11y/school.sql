import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Course } from './entities/course.entity';

@Injectable()
 export class CoursesService {
    constructor(
        @InjectRepository(Course)
        private readonly courseRepository: Repository<Course>,
    ) {}

    findAll(){
        return this.courseRepository.find();
    }
    async create(course: CreateCourseDto){
        const newCourse = this.courseRepository.create(course);
        await this.courseRepository.save(newCourse);

      return{ message: 'Course created successfully', course: newCourse };
    }
    async update(id: number, courseData: UpdateCourseDto): Promise<Course> {
      const course = await this.courseRepository.findOne({ where: { id } });

        if (!course){
          throw new NotFoundException(`Course with ID ${id} not found`);
        }
        this.courseRepository.merge(course, courseData);
        return this.courseRepository.save(course);
    }
    delete(id: number){
        return this.courseRepository.delete(id);
    }
  }
 