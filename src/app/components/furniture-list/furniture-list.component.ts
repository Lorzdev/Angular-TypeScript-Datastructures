import { Component } from '@angular/core';
import {FurnitureService} from "../../services/furniture-list.service";

@Component({
  selector: 'app-furniture-list',
  templateUrl: './furniture-list.component.html',
  styleUrl: './furniture-list.component.css'
})
export class FurnitureListComponent {
  furnitureName: string = '';
  searchTerm: string = '';

  constructor(private furnitureService: FurnitureService) {}

  get furnitureList() {
    return this.furnitureService.getFurnitureList();
  }

  addFurniture() {
    this.furnitureService.addFurniture(this.furnitureName);
    this.furnitureName = '';
  }

  removeFurniture(furniture: string) {
    this.furnitureService.removeFurniture(furniture);
  }

  clearAll() {
    this.furnitureService.clearAll();
  }

  filteredFurniture() {
    return this.furnitureService.searchFurniture(this.searchTerm);
  }
}
