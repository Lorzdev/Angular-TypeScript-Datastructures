import { Component } from '@angular/core';
import {CourseService} from "../../services/course-list.service";

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css'
})

export class CourseListComponent {
  courseName: string = '';
  searchTerm: string = '';
  courseList: { name: string }[] = [];
  filteredCourseList: { name: string }[] = [];

  constructor(private courseService: CourseService) {
    this.courseList = this.courseService.getCourses();
    this.filteredCourseList = [...this.courseList];
  }

  addCourse() {
    if (this.courseName.trim()) {
      const newCourse = { name: this.courseName.trim() };
      this.courseService.addCourse(newCourse);
      this.updateCourseLists();
      this.courseName = '';
    } else {
      console.log('Please enter a course name.');
    }
  }

  removeCourse(index: number) {
    this.courseService.removeCourse(index);
    this.updateCourseLists();
  }

  clearAll() {
    this.courseService.clearAllCourses();
    this.updateCourseLists();
  }

  searchCourses() {
    const searchLower = this.searchTerm.toLowerCase();
    this.filteredCourseList = this.courseList.filter(course =>
      course.name.toLowerCase().includes(searchLower)
    );
  }

  updateCourseLists() {
    this.courseList = this.courseService.getCourses();
    this.searchCourses();
  }
}
