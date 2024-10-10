import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ClassroomService {
  private classroomList: string[] = ['Camo', 'Yuri', 'Calubag', 'Maitom'];

  getClassroomList() {
    return this.classroomList;
  }

  addStudent(student: string) {
    this.classroomList.push(student);
  }

  removeStudent(student: string) {
    const index = this.classroomList.indexOf(student);
    if (index > -1) {
      this.classroomList.splice(index, 1);
    }
  }

  clearAllStudents() {
    this.classroomList = [];
  }
}
