import { Component } from '@angular/core';
import {VideoService} from "../../services/video-list.service";

@Component({
  selector: 'app-video-list',

  templateUrl: './video-list.component.html',
  styleUrl: './video-list.component.css'
})
export class VideoListComponent {
  videoName: string = '';
  searchTerm: string = '';

  constructor(private videoService: VideoService) {}

  get videoList() {
    return this.videoService.getVideoList();
  }

  addVideo() {
    this.videoService.addVideo(this.videoName);
    this.videoName = '';
  }

  removeVideo(video: string) {
    this.videoService.removeVideo(video);
  }

  clearAll() {
    this.videoService.clearAll();
  }

  filteredVideos() {
    return this.videoService.searchVideo(this.searchTerm);
  }
}
