import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class GameService {
  private gameList: string[] = [
    'Apex Legends',
    'Call of Duty',
    'League of Legends',
    'Mobile Legends'
  ];

  getGames() {
    return this.gameList;
  }

  addGame(game: string) {
    this.gameList.push(game);
  }

  removeGame(game: string) {
    const index = this.gameList.indexOf(game);
    if (index > -1) {
      this.gameList.splice(index, 1);
    }
  }

  clearAllGames() {
    this.gameList = [];
  }
}
