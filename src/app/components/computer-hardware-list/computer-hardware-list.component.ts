import { Component } from '@angular/core';
import {HardwareService} from "../../services/computer-hardware-list.service";

@Component({
  selector: 'app-computer-hardware-list',
  templateUrl: './computer-hardware-list.component.html',
  styleUrl: './computer-hardware-list.component.css'
})

export class ComputerHardwareListComponent {
  hardwareItem: string = '';
  searchTerm: string = '';

  constructor(private hardwareService: HardwareService) {}

  get hardwareList() {
    return this.hardwareService.getHardwareList();
  }

  addHardware() {
    this.hardwareService.addHardware(this.hardwareItem);
    this.hardwareItem = '';
  }

  removeHardware(item: string) {
    this.hardwareService.removeHardware(item);
  }

  clearAll() {
    this.hardwareService.clearAll();
  }

  filteredHardware() {
    return this.hardwareService.searchHardware(this.searchTerm);
  }
}
