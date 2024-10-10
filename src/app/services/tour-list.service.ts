import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class TourService {
  private tourDates: string[] = [
    'December 10, 2024 - Manila, Philippines',
    'December 15, 2024 - Cebu, Philippines',
    'December 20, 2024 - Bicol, Philippines',
    'December 25, 2024 - Davao, Philippines',
  ];

  addTour(tourDate: string) {
    this.tourDates.push(tourDate);
  }

  removeTour(tourDate: string) {
    const index = this.tourDates.indexOf(tourDate);
    if (index > -1) {
      this.tourDates.splice(index, 1);
    }
  }

  clearAll() {
    this.tourDates = [];
  }

  getTourDates(): string[] {
    return this.tourDates;
  }

  searchTours(searchTerm: string): string[] {
    if (!searchTerm) {
      return this.tourDates;
    }
    return this.tourDates.filter(tour =>
      tour.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}
