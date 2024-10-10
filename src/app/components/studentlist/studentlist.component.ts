import { Component } from '@angular/core';
import {StudentService} from "../../services/studentlist.service";

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent {
  name: string = '';
  course: string = '';
  section: string = '';
  searchTerm: string = '';
  studentList: string[] = [];
  filteredStudentList: string[] = [];

  constructor(private studentService: StudentService) {
    this.studentList = this.studentService.getStudents();
    this.filteredStudentList = [...this.studentList];
  }

  addItem() {
    if (this.name.trim() && this.course.trim() && this.section.trim()) {
      const studentInfo = `Name: ${this.name.trim()} , Course: ${this.course.trim()}, Section: ${this.section.trim()}`;
      this.studentService.addStudent(studentInfo);
      this.updateStudentLists();
      this.clearInputs();
    } else {
      console.log('Please fill out all fields.');
    }
  }

  clearInputs() {
    this.name = '';
    this.course = '';
    this.section = '';
  }

  clearAll() {
    this.studentService.clearAllStudents();
    this.updateStudentLists();
  }

  searchStudents() {
    const searchLower = this.searchTerm.toLowerCase();
    this.filteredStudentList = this.studentList.filter(student =>
      student.toLowerCase().includes(searchLower)
    );
  }

  updateStudentLists() {
    this.studentList = this.studentService.getStudents();
    this.searchStudents();
  }

}

