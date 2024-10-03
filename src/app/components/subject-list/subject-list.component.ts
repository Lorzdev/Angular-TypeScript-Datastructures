import { Component } from '@angular/core';

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrl: './subject-list.component.css'
})

export class SubjectListComponent {
  subjectName: string = '';


  subjectList: string[] = [
    'INFORMATION ASSURANCE AND SECURITY',
    'SYSTEM ADMINISTRATION AND MAINTENANCE',
    'SYSTEM INTEGRATION AND ARCHITECTURE',
    'NETWORKING 1',
    'CAPSTONE PROJECT 1'
  ];

  addSubject() {
    if (this.subjectName.trim()) {
      this.subjectList.push(this.subjectName.trim());
      this.subjectName = ''; // Clear the input field
    } else {
      console.log('Please enter a subject name.');
    }
  }

  removeSubject(subject: string) {
    const index = this.subjectList.indexOf(subject);
    if (index > -1) {
      this.subjectList.splice(index, 1);
    }
  }
}
