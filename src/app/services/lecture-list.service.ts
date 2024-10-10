import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class LectureService {
  private lectureList: string[] = [
    'Introduction to Programming',
    'Data Structures and Algorithms',
    'Web Development Fundamentals',
    'Database Management Systems',
  ];

  getLectureList() {
    return this.lectureList;
  }

  addLecture(lecture: string) {
    this.lectureList.push(lecture);
  }

  removeLecture(lecture: string) {
    const index = this.lectureList.indexOf(lecture);
    if (index > -1) {
      this.lectureList.splice(index, 1);
    }
  }

  clearAllLectures() {
    this.lectureList = [];
  }
}
