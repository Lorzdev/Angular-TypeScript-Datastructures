import { Component } from '@angular/core';
import {LectureService} from "../../services/lecture-list.service";

@Component({
  selector: 'app-lecture-list',
  templateUrl: './lecture-list.component.html',
  styleUrl: './lecture-list.component.css'
})
export class LectureListComponent {
  lectureName: string = '';
  searchTerm: string = '';

  lectureList: string[] = [];
  filteredLectureList: string[] = [];

  constructor(private lectureService: LectureService) {
    this.lectureList = this.lectureService.getLectureList();
    this.filteredLectureList = [...this.lectureList];
  }

  addLecture() {
    if (this.lectureName.trim()) {
      this.lectureService.addLecture(this.lectureName.trim());
      this.updateLectureList();
      this.lectureName = '';
    } else {
      console.log('Please enter a lecture title.');
    }
  }

  removeLecture(lecture: string) {
    this.lectureService.removeLecture(lecture);
    this.updateLectureList();
  }

  clearAll() {
    this.lectureService.clearAllLectures();
    this.updateLectureList();
  }

  searchLecture() {
    const searchLower = this.searchTerm.toLowerCase();
    this.filteredLectureList = this.lectureList.filter(lecture =>
      lecture.toLowerCase().includes(searchLower)
    );
  }

  updateLectureList() {
    this.lectureList = this.lectureService.getLectureList();
    this.searchLecture();
  }
}
