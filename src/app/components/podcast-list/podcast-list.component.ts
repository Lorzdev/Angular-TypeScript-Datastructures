import { Component } from '@angular/core';

@Component({
  selector: 'app-podcast-list',
  templateUrl: './podcast-list.component.html',
  styleUrl: './podcast-list.component.css'
})
export class PodcastListComponent {
  podcastName: string = '';
  podcastList: string[] = [];

  addPodcast() {
    if (this.podcastName.trim()) {
      this.podcastList.push(this.podcastName.trim());
      this.podcastName = '';
    }
  }

  removePodcast(podcast: string) {
    const index = this.podcastList.indexOf(podcast);
    if (index > -1) {
      this.podcastList.splice(index, 1);
    }
  }
}
