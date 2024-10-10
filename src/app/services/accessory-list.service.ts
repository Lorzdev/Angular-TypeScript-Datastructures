import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AccessoryService {
  private accessoryList: string[] = [
    'Charger',
    'Earphones',
    'Watch',
    'Bracelet',
  ];

  addAccessory(accessory: string) {
    if (accessory.trim()) {
      this.accessoryList.push(accessory.trim());
    }
  }

  removeAccessory(accessory: string) {
    const index = this.accessoryList.indexOf(accessory);
    if (index > -1) {
      this.accessoryList.splice(index, 1);
    }
  }

  clearAll() {
    this.accessoryList = [];
  }

  getAccessoryList(): string[] {
    return this.accessoryList;
  }

  searchAccessory(searchTerm: string): string[] {
    if (!searchTerm) {
      return this.accessoryList;
    }
    return this.accessoryList.filter(accessory =>
      accessory.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}
