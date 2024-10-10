import { Component } from '@angular/core';
import {SoftwareService} from "../../services/software-list.service";

@Component({
  selector: 'app-software-list',
  templateUrl: './software-list.component.html',
  styleUrl: './software-list.component.css'
})
export class SoftwareListComponent {
  softwareName: string = '';
  searchTerm: string = '';
  softwareList: string[] = [];
  filteredSoftwareList: string[] = [];

  constructor(private softwareService: SoftwareService) {
    this.softwareList = this.softwareService.getSoftware();
    this.filteredSoftwareList = [...this.softwareList];
  }

  addSoftware() {
    if (this.softwareName.trim()) {
      this.softwareService.addSoftware(this.softwareName.trim());
      this.updateSoftwareList();
      this.softwareName = '';
    } else {
      console.log('Please enter a software name.');
    }
  }

  removeSoftware(software: string) {
    this.softwareService.removeSoftware(software);
    this.updateSoftwareList();
  }

  clearAll() {
    this.softwareService.clearAllSoftware();
    this.updateSoftwareList();
  }

  searchSoftware() {
    const searchLower = this.searchTerm.toLowerCase();
    this.filteredSoftwareList = this.softwareList.filter(software =>
      software.toLowerCase().includes(searchLower)
    );
  }

  updateSoftwareList() {
    this.softwareList = this.softwareService.getSoftware();
    this.searchSoftware();
  }
}
