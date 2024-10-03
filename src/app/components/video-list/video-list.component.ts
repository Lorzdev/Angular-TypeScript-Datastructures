import { Component } from '@angular/core';

@Component({
  selector: 'app-video-list',

  templateUrl: './video-list.component.html',
  styleUrl: './video-list.component.css'
})
export class VideoListComponent {
  videoName: string = '';
  videoList: string[] = [];

  addVideo() {
    if (this.videoName.trim()) {
      this.videoList.push(this.videoName.trim());
      this.videoName = '';
    }
  }

  removeVideo(video: string) {
    const index = this.videoList.indexOf(video);
    if (index > -1) {
      this.videoList.splice(index, 1);
    }
  }
}
