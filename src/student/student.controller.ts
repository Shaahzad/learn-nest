import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {
    constructor(private readonly Studentservice: StudentService) { }
    @Get()
    getAll() {
        return this.Studentservice.getAllStudents()
    }
    @Get(":id")
    getStudentById(@Param('id') id: string) {
        return this.Studentservice.getStudentById(Number(id))
    }
    @Post()
    create(@Body() body: { name: string, age: number }) {
        return this.Studentservice.createStudent(body)
    }
    @Put(":id")
    updateStudent(@Param('id') id: string, @Body() body: { name: string, age: number }) {
        return this.Studentservice.updateStudent(Number(id), body)
    }
    @Patch(":id")
    PatchStudent(@Param('id') id: string, @Body() body: Partial<{name:string, age: number}>) {
        return this.Studentservice.patchStudent(Number(id), body)
    }
    @Delete(":id")
    remove(@Param('id') id: string){
        return this.Studentservice.deleteStudent(Number(id))
    }

}
