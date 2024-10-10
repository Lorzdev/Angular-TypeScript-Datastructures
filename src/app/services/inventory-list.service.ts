import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class InventoryService {
  private inventoryList: string[] = ['Apples', 'Bananas', 'Milk', 'Bread'];

  getInventoryList() {
    return this.inventoryList;
  }

  addInventoryItem(item: string) {
    this.inventoryList.push(item);
  }

  removeInventoryItem(item: string) {
    const index = this.inventoryList.indexOf(item);
    if (index > -1) {
      this.inventoryList.splice(index, 1);
    }
  }

  clearAllItems() {
    this.inventoryList = [];
  }
}
