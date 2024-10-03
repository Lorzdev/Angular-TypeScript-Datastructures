import { Component } from '@angular/core';

@Component({
  selector: 'app-music-playlist-list',
  templateUrl: './music-playlist-list.component.html',
  styleUrl: './music-playlist-list.component.css'
})
export class MusicPlaylistListComponent {
  songTitle: string = '';
  artistName: string = '';
  playlist: { title: string; artist: string }[] = [];

  addSong() {
    if (this.songTitle.trim() && this.artistName.trim()) {
      const newSong = {
        title: this.songTitle.trim(),
        artist: this.artistName.trim(),
      };
      this.playlist.push(newSong);

      this.songTitle = '';
      this.artistName = '';
    } else {
      console.log('Please enter both song title and artist name.');
    }
  }

  removeSong(song: { title: string; artist: string }) {
    const index = this.playlist.indexOf(song);
    if (index > -1) {
      this.playlist.splice(index, 1);
    }
  }
}
