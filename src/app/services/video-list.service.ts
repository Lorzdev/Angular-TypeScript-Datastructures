import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class VideoService {
  private videoList: string[] = [
    'Introduction to Angular',
    'Learning TypeScript',
    'Understanding Git and GitHub',
    'Web Development Bootcamp',
  ];

  addVideo(video: string) {
    if (video.trim()) {
      this.videoList.push(video.trim());
    }
  }

  removeVideo(video: string) {
    const index = this.videoList.indexOf(video);
    if (index > -1) {
      this.videoList.splice(index, 1);
    }
  }

  clearAll() {
    this.videoList = [];
  }

  getVideoList(): string[] {
    return this.videoList;
  }

  searchVideo(searchTerm: string): string[] {
    if (!searchTerm) {
      return this.videoList;
    }
    return this.videoList.filter(video =>
      video.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}
