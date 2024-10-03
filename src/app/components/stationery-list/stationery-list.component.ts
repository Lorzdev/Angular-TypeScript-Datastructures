import { Component } from '@angular/core';

@Component({
  selector: 'app-stationery-list',
  templateUrl: './stationery-list.component.html',
  styleUrl: './stationery-list.component.css'
})
export class StationeryListComponent {
  stationeryItem: string = '';

  stationeryList: string[] = [
    'Notebook',
    'Pencil',
    'Eraser',
    'Marker',
  ];

  addStationery() {
    if (this.stationeryItem.trim()) {
      this.stationeryList.push(this.stationeryItem.trim());
      this.stationeryItem = '';
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
}
