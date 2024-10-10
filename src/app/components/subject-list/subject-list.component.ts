import { Component } from '@angular/core';
import {SubjectService} from "../../services/subject-list.service";

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrl: './subject-list.component.css'
})

export class SubjectListComponent {
  subjectName: string = '';
  searchTerm: string = '';
  subjectList: string[] = [];
  filteredSubjectList: string[] = [];

  constructor(private subjectService: SubjectService) {
    this.subjectList = this.subjectService.getSubjects();
    this.filteredSubjectList = [...this.subjectList];
  }

  addSubject() {
    if (this.subjectName.trim()) {
      this.subjectService.addSubject(this.subjectName.trim());
      this.updateSubjectList();
      this.subjectName = '';
    } else {
      console.log('Please enter a subject name.');
    }
  }

  removeSubject(subject: string) {
    this.subjectService.removeSubject(subject);
    this.updateSubjectList();
  }

  clearAll() {
    this.subjectService.clearAllSubjects();
    this.updateSubjectList();
  }

  searchSubjects() {
    const searchLower = this.searchTerm.toLowerCase();
    this.filteredSubjectList = this.subjectList.filter(subject =>
      subject.toLowerCase().includes(searchLower)
    );
  }

  updateSubjectList() {
    this.subjectList = this.subjectService.getSubjects();
    this.searchSubjects();
  }
}
