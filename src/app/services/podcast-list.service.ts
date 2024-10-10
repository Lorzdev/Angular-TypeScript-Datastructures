import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PodcastService {
  private podcastList: string[] = [
    'Barangay Love Stories',
    'Dear MOR',
    'Sitio Bangungo Pinoy',
  ];

  addPodcast(podcast: string) {
    if (podcast.trim()) {
      this.podcastList.push(podcast.trim());
    }
  }

  removePodcast(podcast: string) {
    const index = this.podcastList.indexOf(podcast);
    if (index > -1) {
      this.podcastList.splice(index, 1);
    }
  }

  clearAll() {
    this.podcastList = [];
  }

  getPodcastList(): string[] {
    return this.podcastList;
  }

  searchPodcast(searchTerm: string): string[] {
    if (!searchTerm) {
      return this.podcastList;
    }
    return this.podcastList.filter(podcast =>
      podcast.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}
