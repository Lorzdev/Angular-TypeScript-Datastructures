import { Component } from '@angular/core';

@Component({
  selector: 'app-classroom-list',
  templateUrl: './classroom-list.component.html',
  styleUrl: './classroom-list.component.css'
})

export class ClassroomListComponent {
  studentName: string = '';
  classroomList: string[] = [];

  addStudent() {
    if (this.studentName.trim()) {
      this.classroomList.push(this.studentName.trim());
      this.studentName = '';
    } else {
      console.log('Please enter a student name.');
    }
  }

  removeStudent(student: string) {
    const index = this.classroomList.indexOf(student);
    if (index > -1) {
      this.classroomList.splice(index, 1);
    }
  }
}
