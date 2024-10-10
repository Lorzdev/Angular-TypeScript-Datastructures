import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class FurnitureService {
  private furnitureList: string[] = [
    'Recliner',
    'Wardrobe',
    'Dining Table',
    'Coffee Table',
  ];

  addFurniture(furniture: string) {
    if (furniture.trim()) {
      this.furnitureList.push(furniture.trim());
    }
  }

  removeFurniture(furniture: string) {
    const index = this.furnitureList.indexOf(furniture);
    if (index > -1) {
      this.furnitureList.splice(index, 1);
    }
  }

  clearAll() {
    this.furnitureList = [];
  }

  getFurnitureList(): string[] {
    return this.furnitureList;
  }

  searchFurniture(searchTerm: string): string[] {
    if (!searchTerm) {
      return this.furnitureList;
    }
    return this.furnitureList.filter(furniture =>
      furniture.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}
