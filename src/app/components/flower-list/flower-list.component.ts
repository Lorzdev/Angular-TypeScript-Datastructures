import { Component } from '@angular/core';
import {FlowerService} from "../../services/flower-list.service";

@Component({
  selector: 'app-flower-list',
  templateUrl: './flower-list.component.html',
  styleUrl: './flower-list.component.css'
})
export class FlowerListComponent {
  flowerName: string = '';
  searchTerm: string = '';

  constructor(private flowerService: FlowerService) {}

  get flowerList() {
    return this.flowerService.getFlowerList();
  }

  addFlower() {
    this.flowerService.addFlower(this.flowerName);
    this.flowerName = '';
  }

  removeFlower(flower: string) {
    this.flowerService.removeFlower(flower);
  }

  clearAll() {
    this.flowerService.clearAll();
  }

  filteredFlowerList() {
    return this.flowerService.searchFlowers(this.searchTerm);
  }
}
