import { Component } from '@angular/core';
import {GameService} from "../../services/game-list.service";

@Component({
  selector: 'app-game-list',

  templateUrl: './game-list.component.html',
  styleUrl: './game-list.component.css'
})
export class GameListComponent {
  gameName: string = '';
  searchTerm: string = '';
  gameList: string[] = [];
  filteredGameList: string[] = [];

  constructor(private gameService: GameService) {
    this.gameList = this.gameService.getGames();
    this.filteredGameList = [...this.gameList];
  }

  addGame() {
    if (this.gameName.trim()) {
      this.gameService.addGame(this.gameName.trim());
      this.updateGameList();
      this.gameName = '';
    } else {
      console.log('Please enter a game name.');
    }
  }

  removeGame(game: string) {
    this.gameService.removeGame(game);
    this.updateGameList();
  }

  clearAll() {
    this.gameService.clearAllGames();
    this.updateGameList();
  }

  searchGames() {
    const searchLower = this.searchTerm.toLowerCase();
    this.filteredGameList = this.gameList.filter(game =>
      game.toLowerCase().includes(searchLower)
    );
  }

  updateGameList() {
    this.gameList = this.gameService.getGames();
    this.searchGames();
  }
}

