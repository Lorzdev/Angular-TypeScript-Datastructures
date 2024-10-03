import { Component } from '@angular/core';

@Component({
  selector: 'app-building-list',
  templateUrl: './building-list.component.html',
  styleUrl: './building-list.component.css'
})
export class BuildingListComponent {
  buildingName: string = '';

  // Predefined list of buildings
  buildingList: string[] = [
    'Library',
    'Science Lab',
    'Computer Lab',
    'Sports Complex'
  ];

  addBuilding() {
    if (this.buildingName.trim()) {
      this.buildingList.push(this.buildingName.trim());
      this.buildingName = '';
    } else {
      console.log('Please enter a building name.');
    }
  }

  removeBuilding(building: string) {
    const index = this.buildingList.indexOf(building);
    if (index > -1) {
      this.buildingList.splice(index, 1);
    }
  }
}
