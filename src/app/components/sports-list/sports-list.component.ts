import { Component } from '@angular/core';

@Component({
  selector: 'app-sports-list',
  templateUrl: './sports-list.component.html',
  styleUrl: './sports-list.component.css'
})
export class SportsListComponent {
  sportName: string = '';

  sportsList: string[] = [
    'Basketball',
    'Tennis',
    'Baseball',
    'Swimming',
    'Volleyball'
  ];

  addSport() {
    if (this.sportName.trim()) {
      this.sportsList.push(this.sportName.trim());
      this.sportName = '';
    } else {
      console.log('Please enter a sport name.');
    }
  }

  removeSport(sport: string) {
    const index = this.sportsList.indexOf(sport);
    if (index > -1) {
      this.sportsList.splice(index, 1);
    }
  }
}
