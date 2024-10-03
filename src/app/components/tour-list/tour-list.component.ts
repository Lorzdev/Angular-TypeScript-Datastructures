import { Component } from '@angular/core';

@Component({
  selector: 'app-tour-list',
  templateUrl: './tour-list.component.html',
  styleUrl: './tour-list.component.css'
})
export class TourListComponent {
  newTourDate: string = '';
  tourDates: string[] = [
    'December 10, 2024 - Manila, Philippines',
    'December 15, 2024 - Cebu, Philippines',
    'December 20, 2024 - Bicol, Philippines',
    'December 25, 2024 - Davao, Philippines'
  ];

  addTour() {
    if (this.newTourDate.trim()) {
      this.tourDates.push(this.newTourDate.trim());
      this.newTourDate = '';
    }
  }

  removeTour(tour: string) {
    const index = this.tourDates.indexOf(tour);
    if (index > -1) {
      this.tourDates.splice(index, 1);
    }
  }
}
