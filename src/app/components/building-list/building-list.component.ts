import { Component } from '@angular/core';
import {BuildingService} from "../../services/building-list.service";

@Component({
  selector: 'app-building-list',
  templateUrl: './building-list.component.html',
  styleUrl: './building-list.component.css'
})

export class BuildingListComponent {
  buildingName: string = '';
  searchTerm: string = '';

  constructor(private buildingService: BuildingService) {}

  get buildingList() {
    return this.buildingService.getBuildingList();
  }

  addBuilding() {
    this.buildingService.addBuilding(this.buildingName);
    this.buildingName = '';
  }

  removeBuilding(building: string) {
    this.buildingService.removeBuilding(building);
  }

  clearAll() {
    this.buildingService.clearAll();
  }

  filteredBuildings() {
    return this.buildingService.searchBuilding(this.searchTerm);
  }
}
