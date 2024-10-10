import { Component } from '@angular/core';
import {ArtistService} from "../../services/artist-list.service";

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrl: './artist-list.component.css'
})

export class ArtistListComponent {
  artistName: string = '';
  searchTerm: string = '';

  constructor(private artistService: ArtistService) {}

  get artistList() {
    return this.artistService.getArtistList();
  }

  addArtist() {
    this.artistService.addArtist(this.artistName);
    this.artistName = '';
  }

  removeArtist(artist: string) {
    this.artistService.removeArtist(artist);
  }

  clearAll() {
    this.artistService.clearAll();
  }

  filteredArtists() {
    return this.artistService.searchArtist(this.searchTerm);
  }
}
