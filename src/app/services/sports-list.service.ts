import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class SportsService {
  private sportsList: string[] = [
    'Basketball',
    'Tennis',
    'Swimming',
    'Volleyball'
  ];

  getSports() {
    return this.sportsList;
  }

  addSport(sport: string) {
    this.sportsList.push(sport);
  }

  removeSport(sport: string) {
    const index = this.sportsList.indexOf(sport);
    if (index > -1) {
      this.sportsList.splice(index, 1);
    }
  }

  clearAllSports() {
    this.sportsList = [];
  }
}
