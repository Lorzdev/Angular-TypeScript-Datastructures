import { Component } from '@angular/core';
import {ClassroomService} from "../../services/classroom-list.service";

@Component({
  selector: 'app-classroom-list',
  templateUrl: './classroom-list.component.html',
  styleUrl: './classroom-list.component.css'
})
export class ClassroomListComponent {
  studentName: string = '';
  searchTerm: string = '';

  classroomList: string[] = [];
  filteredClassroomList: string[] = [];

  constructor(private classroomService: ClassroomService) {
    this.classroomList = this.classroomService.getClassroomList();
    this.filteredClassroomList = [...this.classroomList];
  }

  addStudent() {
    if (this.studentName.trim()) {
      this.classroomService.addStudent(this.studentName.trim());
      this.updateClassroomList();
      this.studentName = '';
    } else {
      console.log('Please enter a student name.');
    }
  }

  removeStudent(student: string) {
    this.classroomService.removeStudent(student);
    this.updateClassroomList();
  }

  clearAll() {
    this.classroomService.clearAllStudents();
    this.updateClassroomList();
  }

  searchClassroomList() {
    const searchLower = this.searchTerm.toLowerCase();
    this.filteredClassroomList = this.classroomList.filter(student =>
      student.toLowerCase().includes(searchLower)
    );
  }

  updateClassroomList() {
    this.classroomList = this.classroomService.getClassroomList();
    this.searchClassroomList();
  }
}
