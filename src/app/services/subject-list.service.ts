import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class SubjectService {
  private subjectList: string[] = [
    'INFORMATION ASSURANCE AND SECURITY',
    'SYSTEM ADMINISTRATION AND MAINTENANCE',
    'SYSTEM INTEGRATION AND ARCHITECTURE',
    'CAPSTONE PROJECT 1'
  ];

  getSubjects() {
    return this.subjectList;
  }

  addSubject(subject: string) {
    this.subjectList.push(subject);
  }

  removeSubject(subject: string) {
    const index = this.subjectList.indexOf(subject);
    if (index > -1) {
      this.subjectList.splice(index, 1);
    }
  }

  clearAllSubjects() {
    this.subjectList = [];
  }
}
