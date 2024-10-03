import { Component } from '@angular/core';

@Component({
  selector: 'app-game-list',

  templateUrl: './game-list.component.html',
  styleUrl: './game-list.component.css'
})
export class GameListComponent {
  gameName: string = '';

  gameList: string[] = [
    'Apex Legends',
    'Call of Duty',
    'League of Legends',
    'Mobile Legends'
  ];

  addGame() {
    if (this.gameName.trim()) {
      this.gameList.push(this.gameName.trim());
      this.gameName = ''; // Clear the input field
    } else {
      console.log('Please enter a game name.');
    }
  }

  removeGame(game: string) {
    const index = this.gameList.indexOf(game);
    if (index > -1) {
      this.gameList.splice(index, 1);
    }
  }
}


