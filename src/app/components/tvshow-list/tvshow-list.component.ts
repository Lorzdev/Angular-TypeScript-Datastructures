import { Component } from '@angular/core';
import {TVShowService} from "../../services/tvshow-list.service";

@Component({
  selector: 'app-tvshow-list',
  templateUrl: './tvshow-list.component.html',
  styleUrl: './tvshow-list.component.css'
})
export class TVShowListComponent {
  showName: string = '';
  searchTerm: string = '';

  constructor(private tvShowService: TVShowService) {}

  get showList() {
    return this.tvShowService.getShowList();
  }

  addShow() {
    this.tvShowService.addShow(this.showName);
    this.showName = '';
  }

  removeShow(show: string) {
    this.tvShowService.removeShow(show);
  }

  clearAll() {
    this.tvShowService.clearAll();
  }

  filteredShows() {
    return this.tvShowService.searchShow(this.searchTerm);
  }
}
