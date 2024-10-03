import { Component } from '@angular/core';

@Component({
  selector: 'app-video-list',

  templateUrl: './video-list.component.html',
  styleUrl: './video-list.component.css'
})
export class VideoListComponent {
  videoName: string = '';

  videoList: string[] = [
    'Introduction to Angular',
    'Learning TypeScript',
    'Building Responsive Web Apps',
    'Understanding Git and GitHub',
    'Web Development Bootcamp',
  ];

  addVideo() {
    if (this.videoName.trim()) {
      this.videoList.push(this.videoName.trim());
      this.videoName = '';
    } else {
      console.log('Please enter a video name.');
    }
  }

  removeVideo(video: string) {
    const index = this.videoList.indexOf(video);
    if (index > -1) {
      this.videoList.splice(index, 1);
    }
  }
}
