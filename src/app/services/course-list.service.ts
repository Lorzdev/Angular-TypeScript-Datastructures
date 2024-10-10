import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private courseList: { name: string }[] = [
    { name: 'BSHM' },
    { name: 'BSIT' },
    { name: 'BSIS' },
    { name: 'BSBA' },
    { name: 'BSED' },
  ];

  getCourses() {
    return this.courseList;
  }

  addCourse(course: { name: string }) {
    this.courseList.push(course);
  }

  removeCourse(index: number) {
    this.courseList.splice(index, 1);
  }

  clearAllCourses() {
    this.courseList = [];
  }
}
