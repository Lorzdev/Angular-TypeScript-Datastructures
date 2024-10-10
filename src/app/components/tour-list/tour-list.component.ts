import { Component } from '@angular/core';
import {TourService} from "../../services/tour-list.service";

@Component({
  selector: 'app-tour-list',
  templateUrl: './tour-list.component.html',
  styleUrl: './tour-list.component.css'
})
export class TourListComponent {
  newTourDate: string = '';
  searchTerm: string = '';

  constructor(private tourService: TourService) {}

  get tourDates() {
    return this.tourService.getTourDates();
  }

  addTour() {
    if (this.newTourDate.trim()) {
      this.tourService.addTour(this.newTourDate.trim());
      this.newTourDate = '';
    } else {
      console.log('Please enter a tour date.');
    }
  }

  removeTour(tour: string) {
    this.tourService.removeTour(tour);
  }

  clearAll() {
    this.tourService.clearAll();
  }

  filteredTourDates() {
    return this.tourService.searchTours(this.searchTerm);
  }
}
