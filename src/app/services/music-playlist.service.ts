import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class PlaylistService {
  private playlist: { title: string; artist: string }[] = [
    { title: 'Boyfriend', artist: 'ALLMO$T' },
    { title: 'Sumugal', artist: 'Hev Abi' },
    { title: 'When I Was Your Man', artist: 'Bruno Mars' },
    { title: 'Love Yourself', artist: 'Justin Bieber' }
  ];

  getPlaylist() {
    return this.playlist;
  }

  addSong(song: { title: string; artist: string }) {
    this.playlist.push(song);
  }

  removeSong(song: { title: string; artist: string }) {
    const index = this.playlist.indexOf(song);
    if (index > -1) {
      this.playlist.splice(index, 1);
    }
  }

  clearAllSongs() {
    this.playlist = [];
  }
}
