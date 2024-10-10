import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ArtistService {
  private artistList: string[] = [
    'Juan LUNA Y NOVICIO',
    'Fernando ZOBEL DE AYALA',
    'Vicente Silva MANANSALA',
    'Alfonso OSSORIO'
  ];

  addArtist(artist: string) {
    if (artist.trim()) {
      this.artistList.push(artist.trim());
    }
  }

  removeArtist(artist: string) {
    const index = this.artistList.indexOf(artist);
    if (index > -1) {
      this.artistList.splice(index, 1);
    }
  }

  clearAll() {
    this.artistList = [];
  }

  getArtistList(): string[] {
    return this.artistList;
  }

  searchArtist(searchTerm: string): string[] {
    if (!searchTerm) {
      return this.artistList;
    }
    return this.artistList.filter(artist =>
      artist.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}
