import { Component } from '@angular/core';

@Component({
  selector: 'app-lecture-list',
  templateUrl: './lecture-list.component.html',
  styleUrl: './lecture-list.component.css'
})
export class LectureListComponent {
  lectureName: string = '';


  lectureList: string[] = [
    'Introduction to Programming',
    'Data Structures and Algorithms',
    'Web Development Fundamentals',
    'Database Management Systems',
    'Software Engineering Principles'
  ];

  addLecture() {
    if (this.lectureName.trim()) {
      this.lectureList.push(this.lectureName.trim());
      this.lectureName = '';
    } else {
      console.log('Please enter a lecture title.');
    }
  }

  removeLecture(lecture: string) {
    const index = this.lectureList.indexOf(lecture);
    if (index > -1) {
      this.lectureList.splice(index, 1);
    }
  }
}
