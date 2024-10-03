import { Component } from '@angular/core';

@Component({
  selector: 'app-building-list',
  templateUrl: './building-list.component.html',
  styleUrl: './building-list.component.css'
})
export class BuildingListComponent {
  buildingName: string = '';
  buildingList: string[] = [];

  addBuilding() {
    if (this.buildingName.trim()) {
      this.buildingList.push(this.buildingName.trim());
      this.buildingName = '';
    }
  }

  removeBuilding(building: string) {
    const index = this.buildingList.indexOf(building);
    if (index > -1) {
      this.buildingList.splice(index, 1);
    }
  }
}
