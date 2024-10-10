import { Component } from '@angular/core';
import {AccessoryService} from "../../services/accessory-list.service";

@Component({
  selector: 'app-accessory-list',

  templateUrl: './accessory-list.component.html',
  styleUrl: './accessory-list.component.css'
})
export class AccessoryListComponent {
  accessoryName: string = '';
  searchTerm: string = '';

  constructor(private accessoryService: AccessoryService) {}

  get accessoryList() {
    return this.accessoryService.getAccessoryList();
  }

  addAccessory() {
    this.accessoryService.addAccessory(this.accessoryName);
    this.accessoryName = '';
  }

  removeAccessory(accessory: string) {
    this.accessoryService.removeAccessory(accessory);
  }

  clearAll() {
    this.accessoryService.clearAll();
  }

  filteredAccessories() {
    return this.accessoryService.searchAccessory(this.searchTerm);
  }
}
