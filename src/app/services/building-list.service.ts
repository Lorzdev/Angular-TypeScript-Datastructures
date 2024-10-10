import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BuildingService {
  private buildingList: string[] = [
    'Library',
    'Science Lab',
    'Computer Lab',
    'Sports Complex',
  ];

  addBuilding(building: string) {
    if (building.trim()) {
      this.buildingList.push(building.trim());
    }
  }

  removeBuilding(building: string) {
    const index = this.buildingList.indexOf(building);
    if (index > -1) {
      this.buildingList.splice(index, 1);
    }
  }

  clearAll() {
    this.buildingList = [];
  }

  getBuildingList(): string[] {
    return this.buildingList;
  }

  searchBuilding(searchTerm: string): string[] {
    if (!searchTerm) {
      return this.buildingList;
    }
    return this.buildingList.filter(building =>
      building.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}
