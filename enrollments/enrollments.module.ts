 
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
 
import { EnrollmentsController } from './enrollments.controller';
import { EnrollmentsService } from './enrollments.service';
 
import { AuthModule } from '../auth/auth.module'; 
import { Enrollment } from './entities/enrollment.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Enrollment]),
    
    AuthModule, 
  ],
  controllers: [EnrollmentsController],
  providers: [ EnrollmentsService],
})
export class EnrollmentsModule {}