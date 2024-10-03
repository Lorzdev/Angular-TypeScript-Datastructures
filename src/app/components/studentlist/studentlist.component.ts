import { Component } from '@angular/core';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent {

  name: string = '';
  course: string = '';
  section: string = '';
  studentList: string[] = [
     'Name: Lorenz Camo, Course: BSIT, Section: 4A',
     'Name: Decio Rodel, Course: BSIT, Section: 4A',
     'Name: Calda Rodel, Course: BSIT, Section: 4A',
     'Name: Amador Kaysie, Course: BSIT, Section: 4A',

  ];

  addItem() {
    if (this.name.trim() && this.course.trim() && this.section.trim()) {
      const studentInfo = `Name: ${this.name.trim()} , Course: ${this.course.trim()}, Section: ${this.section.trim()}`;
      this.studentList.push(studentInfo);

      this.name = '';
      this.course = '';
      this.section = '';
    }
    else {
      console.log('Please fill out all fields.');
    }
  }
}
