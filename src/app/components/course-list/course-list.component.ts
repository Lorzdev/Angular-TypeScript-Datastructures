import { Component } from '@angular/core';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css'
})

export class CourseListComponent {
  courseName: string = '';

  courseList: { name: string }[] = [
    { name: 'BSHM' },
    { name: 'BSIT' },
    { name: 'BSIS' },
    { name: 'BSBA' },
    { name: 'BSED' },
  ];

  addCourse() {
    if (this.courseName.trim()) {
      const newCourse = {
        name: this.courseName.trim(),
      };
      this.courseList.push(newCourse);
      this.courseName = '';
    } else {
      console.log('Please fill out all fields.');
    }
  }

  removeCourse(index: number) {
    this.courseList.splice(index, 1);
  }
}
