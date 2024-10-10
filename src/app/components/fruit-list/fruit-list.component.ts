import { Component } from '@angular/core';
import {FruitService} from "../../services/fruit-list.service";

@Component({
  selector: 'app-fruit-list',
  templateUrl: './fruit-list.component.html',
  styleUrl: './fruit-list.component.css'
})
export class FruitListComponent {
  fruitName: string = '';
  searchTerm: string = '';
  fruitList: string[] = [];
  filteredFruitList: string[] = [];

  constructor(private fruitService: FruitService) {
    this.fruitList = this.fruitService.getFruits();
    this.filteredFruitList = [...this.fruitList];
  }

  addFruit() {
    if (this.fruitName.trim()) {
      this.fruitService.addFruit(this.fruitName.trim());
      this.updateFruitLists();
      this.fruitName = '';
    } else {
      console.log('Please enter a fruit name.');
    }
  }

  removeFruit(index: number) {
    this.fruitService.removeFruit(index);
    this.updateFruitLists();
  }

  clearAll() {
    this.fruitService.clearAllFruits();
    this.updateFruitLists();
  }

  searchFruits() {
    const searchLower = this.searchTerm.toLowerCase();
    this.filteredFruitList = this.fruitList.filter(fruit =>
      fruit.toLowerCase().includes(searchLower)
    );
  }

  updateFruitLists() {
    this.fruitList = this.fruitService.getFruits();
    this.searchFruits();
  }
}
