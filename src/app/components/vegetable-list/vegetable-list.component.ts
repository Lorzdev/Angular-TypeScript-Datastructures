import { Component } from '@angular/core';
import {VegetableService} from "../../services/vegetable-list.service";

@Component({
  selector: 'app-vegetable-list',
  templateUrl: './vegetable-list.component.html',
  styleUrl: './vegetable-list.component.css'
})

export class VegetableListComponent {
  vegetableName: string = '';
  searchTerm: string = '';
  vegetableList: string[] = [];
  filteredVegetableList: string[] = [];

  constructor(private vegetableService: VegetableService) {
    this.vegetableList = this.vegetableService.getVegetables();
    this.filteredVegetableList = [...this.vegetableList];
  }

  addVegetable() {
    if (this.vegetableName.trim()) {
      this.vegetableService.addVegetable(this.vegetableName.trim());
      this.updateVegetableList();
      this.vegetableName = '';
    } else {
      console.log('Please enter a vegetable name.');
    }
  }

  removeVegetable(vegetable: string) {
    this.vegetableService.removeVegetable(vegetable);
    this.updateVegetableList();
  }

  clearAll() {
    this.vegetableService.clearAllVegetables();
    this.updateVegetableList();
  }

  searchVegetables() {
    const searchLower = this.searchTerm.toLowerCase();
    this.filteredVegetableList = this.vegetableList.filter(vegetable =>
      vegetable.toLowerCase().includes(searchLower)
    );
  }

  updateVegetableList() {
    this.vegetableList = this.vegetableService.getVegetables();
    this.searchVegetables();
  }
}
