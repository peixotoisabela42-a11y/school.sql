import { Controller, Get, Post, Body, Param, Delete, Put, ParseIntPipe } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
// 1. IMPORTAÇÃO NECESSÁRIA:
// ⚠️ ATENÇÃO: Ajuste o caminho se seu 'auth.guard.ts' estiver em outro local
import { Public } from '../auth/auth.guard'; 

@Controller('courses')
export class CoursesController {
constructor(private readonly coursesService: CoursesService) {}

@Post()
create(@Body() createCourseDto: CreateCourseDto) {
return this.coursesService.create(createCourseDto);
 }

  // 2. A CORREÇÃO: Usar o decorador @Public()
  @Public()
@Get()
findAll() {
 return this.coursesService.findAll();
 }

@Put(':id')
 update(@Param('id', ParseIntPipe) id: number, @Body() updateCourseDto: UpdateCourseDto) {
 return this.coursesService.update(id, updateCourseDto);
}

 @Delete(':id')
 remove(@Param('id', ParseIntPipe) id: number) {
 return this.coursesService.delete(id);
 }

}