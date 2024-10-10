import { Component } from '@angular/core';
import {InventoryService} from "../../services/inventory-list.service";

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrl: './inventory-list.component.css'
})
export class InventoryListComponent {
  inventoryItem: string = '';
  searchTerm: string = '';

  inventoryList: string[] = [];
  filteredInventoryList: string[] = [];

  constructor(private inventoryService: InventoryService) {
    this.inventoryList = this.inventoryService.getInventoryList();
    this.filteredInventoryList = [...this.inventoryList];
  }

  addInventoryItem() {
    if (this.inventoryItem.trim()) {
      this.inventoryService.addInventoryItem(this.inventoryItem.trim());
      this.updateInventoryList();
      this.inventoryItem = '';
    } else {
      console.log('Please enter an inventory item.');
    }
  }

  removeInventoryItem(item: string) {
    this.inventoryService.removeInventoryItem(item);
    this.updateInventoryList();
  }

  clearAll() {
    this.inventoryService.clearAllItems();
    this.updateInventoryList();
  }

  searchInventory() {
    const searchLower = this.searchTerm.toLowerCase();
    this.filteredInventoryList = this.inventoryList.filter(item =>
      item.toLowerCase().includes(searchLower)
    );
  }

  updateInventoryList() {
    this.inventoryList = this.inventoryService.getInventoryList();
    this.searchInventory();
  }
}
