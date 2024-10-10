import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private studentList: string[] = [
    'Name: Lorenz Camo, Course: BSIT, Section: 4A',
    'Name: Decio Rodel, Course: BSIT, Section: 4A',
    'Name: Calda Rodel, Course: BSIT, Section: 4A',
    'Name: Amador Kaysie, Course: BSIT, Section: 4A',
  ];

  addStudent(student: string) {
    this.studentList.push(student);
  }

  getStudents() {
    return this.studentList;
  }

  clearAllStudents() {
    this.studentList = [];
  }
}

