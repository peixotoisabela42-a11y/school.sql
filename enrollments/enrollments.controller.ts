  

import { 
  Controller, 
  Get, 
  Post, 
  Body, 
    
  Param, 
  Delete, 
  Put, 
  ParseIntPipe, 
  UseGuards  
} from '@nestjs/common';

import { AuthGuard } from '../auth/auth.guard';  

import { EnrollmentsService } from './enrollments.service';
import { CreateEnrollmentDto } from './dto/create-enrollment.dto';
import { UpdateEnrollmentDto } from './dto/update-enrollment.dto';

 
import { Public } from '../auth/auth.guard'; 
 
 

@Controller('enrollments')
export class EnrollmentsController {
  constructor(private readonly enrollmentsService: EnrollmentsService) {}

  
  @Public()
  @Post()
  create(@Body() createEnrollmentDto: CreateEnrollmentDto) {
    return this.enrollmentsService.create(createEnrollmentDto);
  }

  
  @UseGuards(AuthGuard)
  @Get()
  findAll() {
    return this.enrollmentsService.findAll();
  }

 
  @UseGuards(AuthGuard)
  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() UpdateEnrollmentDto: UpdateEnrollmentDto ) {
    return this.enrollmentsService.update(id, UpdateEnrollmentDto);
  }

  
  @UseGuards(AuthGuard)
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.enrollmentsService.delete(id);
  }
}