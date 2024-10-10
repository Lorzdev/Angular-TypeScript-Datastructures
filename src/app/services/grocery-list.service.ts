import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GroceryService {
  private groceryList: string[] = ['Milk', 'Bread', 'Eggs', 'Cheese'];

  getGroceryList() {
    return this.groceryList;
  }

  addGroceryItem(item: string) {
    this.groceryList.push(item);
  }

  removeGroceryItem(item: string) {
    const index = this.groceryList.indexOf(item);
    if (index > -1) {
      this.groceryList.splice(index, 1);
    }
  }

  clearAllGroceryItems() {
    this.groceryList = [];
  }
}
