import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EnrollmentsModule  } from './enrollments/enrollments.module';
import { CoursesModule } from './courses/courses.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Enrollment } from './enrollments/entities/enrollment.entity';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { Course } from './courses/entities/course.entity';
import { EmployeeModule } from './employee/employee.module';
import { Employee } from './employee/entities/employee.entity';

 
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306, // padrão
      username: 'root',
      password: '',
      database: 'school',
      entities:[Enrollment,Course,Employee],
      synchronize: true  
    
    }),
    EnrollmentsModule , CoursesModule, AuthModule, UsersModule, EmployeeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}