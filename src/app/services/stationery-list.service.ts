import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class StationeryService {
  private stationeryList: string[] = [
    'Notebook',
    'Pencil',
    'Eraser',
    'Marker',
  ];

  addStationery(item: string) {
    if (item.trim()) {
      this.stationeryList.push(item.trim());
    } else {
      console.log('Please enter a stationery item.');
    }
  }

  removeStationery(item: string) {
    const index = this.stationeryList.indexOf(item);
    if (index > -1) {
      this.stationeryList.splice(index, 1);
    }
  }

  clearAll() {
    this.stationeryList = []; // Clear all items
  }

  getStationeryList(): string[] {
    return this.stationeryList;
  }

  searchStationery(searchTerm: string): string[] {
    if (!searchTerm) {
      return this.stationeryList;
    }
    return this.stationeryList.filter(item =>
      item.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}
