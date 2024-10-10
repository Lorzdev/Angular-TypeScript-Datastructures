import { Component } from '@angular/core';
import {PodcastService} from "../../services/podcast-list.service";

@Component({
  selector: 'app-podcast-list',
  templateUrl: './podcast-list.component.html',
  styleUrl: './podcast-list.component.css'
})
export class PodcastListComponent {
  podcastName: string = '';
  searchTerm: string = '';

  constructor(private podcastService: PodcastService) {}

  get podcastList() {
    return this.podcastService.getPodcastList();
  }

  addPodcast() {
    this.podcastService.addPodcast(this.podcastName);
    this.podcastName = '';
  }

  removePodcast(podcast: string) {
    this.podcastService.removePodcast(podcast);
  }

  clearAll() {
    this.podcastService.clearAll();
  }

  filteredPodcasts() {
    return this.podcastService.searchPodcast(this.searchTerm);
  }
}
