import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DestinationService {
  private destinationList: string[] = [
    'Siargao',
    'Boracay',
    'Tokyo Japan',
    'Cebu',
  ];

  addDestination(destination: string) {
    if (destination.trim()) {
      this.destinationList.push(destination.trim());
    } else {
      console.log('Please enter a destination name.');
    }
  }

  removeDestination(destination: string) {
    const index = this.destinationList.indexOf(destination);
    if (index > -1) {
      this.destinationList.splice(index, 1);
    }
  }

  clearAll() {
    this.destinationList = [];
  }

  getDestinationList(): string[] {
    return this.destinationList;
  }

  searchDestinations(searchTerm: string): string[] {
    if (!searchTerm) {
      return this.destinationList;
    }
    return this.destinationList.filter(destination =>
      destination.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}
