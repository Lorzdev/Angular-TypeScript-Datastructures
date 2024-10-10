import { Component } from '@angular/core';
import {PlaylistService} from "../../services/music-playlist.service";

@Component({
  selector: 'app-music-playlist-list',
  templateUrl: './music-playlist-list.component.html',
  styleUrl: './music-playlist-list.component.css'
})
export class MusicPlaylistListComponent {
  songTitle: string = '';
  artistName: string = '';
  searchTerm: string = '';

  playlist: { title: string; artist: string }[] = [];
  filteredPlaylist: { title: string; artist: string }[] = [];

  constructor(private playlistService: PlaylistService) {
    this.playlist = this.playlistService.getPlaylist();
    this.filteredPlaylist = [...this.playlist];
  }

  addSong() {
    if (this.songTitle.trim() && this.artistName.trim()) {
      const newSong = {
        title: this.songTitle.trim(),
        artist: this.artistName.trim(),
      };
      this.playlistService.addSong(newSong);
      this.updatePlaylist();
      this.songTitle = '';
      this.artistName = '';
    } else {
      console.log('Please enter both song title and artist name.');
    }
  }

  removeSong(song: { title: string; artist: string }) {
    this.playlistService.removeSong(song);
    this.updatePlaylist();
  }

  clearAll() {
    this.playlistService.clearAllSongs();
    this.updatePlaylist();
  }

  searchPlaylist() {
    const searchLower = this.searchTerm.toLowerCase();
    this.filteredPlaylist = this.playlist.filter(song =>
      song.title.toLowerCase().includes(searchLower) ||
      song.artist.toLowerCase().includes(searchLower)
    );
  }

  updatePlaylist() {
    this.playlist = this.playlistService.getPlaylist();
    this.searchPlaylist();
  }
}
