import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class StudentService {
    private students = [
        { id: 1, name: "Shahzad", age: 20 },
        { id: 2, name: "Hamza", age: 30 },
        { id: 3, name: "Zubair", age: 25 },
    ]

    getAllStudents() {
        return this.students
    }

    getStudentById(id: number) {
        const student = this.students.find((student) => student.id === id);
        if (!student) throw new NotFoundException("Student Not Found")
        return student
    }
    // Post
    createStudent(data: { name: string; age: number }) {
        const newStudent = {
            id: Date.now(),
            ...data
        };
        this.students.push(newStudent)
        return newStudent
    }

    // Put
    updateStudent(id: number, data: { name: string, age: number }) {
        const index = this.students.findIndex((s) => s.id === id)
        if (index === -1) throw new NotFoundException("Student Not Found!")
        this.students[index] = { id, ...data }
        return this.students[index]
    }
}
