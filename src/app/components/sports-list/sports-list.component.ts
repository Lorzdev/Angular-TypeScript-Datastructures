import { Component } from '@angular/core';
import {SportsService} from "../../services/sports-list.service";

@Component({
  selector: 'app-sports-list',
  templateUrl: './sports-list.component.html',
  styleUrl: './sports-list.component.css'
})
export class SportsListComponent {
  sportName: string = '';
  searchTerm: string = '';
  sportsList: string[] = [];
  filteredSportsList: string[] = [];

  constructor(private sportsService: SportsService) {
    this.sportsList = this.sportsService.getSports();
    this.filteredSportsList = [...this.sportsList];
  }

  addSport() {
    if (this.sportName.trim()) {
      this.sportsService.addSport(this.sportName.trim());
      this.updateSportsList();
      this.sportName = '';
    } else {
      console.log('Please enter a sport name.');
    }
  }

  removeSport(sport: string) {
    this.sportsService.removeSport(sport);
    this.updateSportsList();
  }

  clearAll() {
    this.sportsService.clearAllSports();
    this.updateSportsList();
  }

  searchSports() {
    const searchLower = this.searchTerm.toLowerCase();
    this.filteredSportsList = this.sportsList.filter(sport =>
      sport.toLowerCase().includes(searchLower)
    );
  }

  updateSportsList() {
    this.sportsList = this.sportsService.getSports();
    this.searchSports();
  }
}
