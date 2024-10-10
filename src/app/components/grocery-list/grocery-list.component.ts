import { Component } from '@angular/core';
import {GroceryService} from "../../services/grocery-list.service";

@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrl: './grocery-list.component.css'
})

export class GroceryListComponent {
  groceryItem: string = '';
  searchTerm: string = '';

  groceryList: string[] = [];
  filteredGroceryList: string[] = [];

  constructor(private groceryService: GroceryService) {
    this.groceryList = this.groceryService.getGroceryList();
    this.filteredGroceryList = [...this.groceryList];
  }

  addGroceryItem() {
    if (this.groceryItem.trim()) {
      this.groceryService.addGroceryItem(this.groceryItem.trim());
      this.updateGroceryList();
      this.groceryItem = '';
    } else {
      console.log('Please enter an item.');
    }
  }

  removeGroceryItem(item: string) {
    this.groceryService.removeGroceryItem(item);
    this.updateGroceryList();
  }

  clearAll() {
    this.groceryService.clearAllGroceryItems();
    this.updateGroceryList();
  }

  searchGroceryList() {
    const searchLower = this.searchTerm.toLowerCase();
    this.filteredGroceryList = this.groceryList.filter(item =>
      item.toLowerCase().includes(searchLower)
    );
  }

  updateGroceryList() {
    this.groceryList = this.groceryService.getGroceryList();
    this.searchGroceryList();
  }
}
