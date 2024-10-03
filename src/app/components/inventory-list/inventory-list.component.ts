import { Component } from '@angular/core';

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrl: './inventory-list.component.css'
})
export class InventoryListComponent {
  inventoryItem: string = '';

  // Predefined list of inventory items
  inventoryList: string[] = [
    'Apples',
    'Bananas',
    'Milk',
    'Bread'
  ];

  addInventoryItem() {
    if (this.inventoryItem.trim()) {
      this.inventoryList.push(this.inventoryItem.trim());
      this.inventoryItem = ''; // Clear the input field after adding
    } else {
      console.log('Please enter an inventory item.');
    }
  }

  removeInventoryItem(item: string) {
    const index = this.inventoryList.indexOf(item);
    if (index > -1) {
      this.inventoryList.splice(index, 1); // Remove the item from the list
    }
  }
}
