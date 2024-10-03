import { Component } from '@angular/core';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrl: './artist-list.component.css'
})

export class ArtistListComponent {
  artistName: string = '';
  artistList: string[] = [];

  addArtist() {
    if (this.artistName.trim()) {
      this.artistList.push(this.artistName.trim());
      this.artistName = '';
    }
  }

  removeArtist(artist: string) {
    const index = this.artistList.indexOf(artist);
    if (index > -1) {
      this.artistList.splice(index, 1);
    }
  }
}
