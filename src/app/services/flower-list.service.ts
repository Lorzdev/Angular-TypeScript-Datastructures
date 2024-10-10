import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class FlowerService {
  private flowerList: string[] = [
    'Rose',
    'Tulip',
    'Sunflower',
    'Daisy',
  ];

  addFlower(flower: string) {
    if (flower.trim()) {
      this.flowerList.push(flower.trim());
    } else {
    }
  }

  removeFlower(flower: string) {
    const index = this.flowerList.indexOf(flower);
    if (index > -1) {
      this.flowerList.splice(index, 1);
    }
  }

  clearAll() {
    this.flowerList = [];
  }

  getFlowerList(): string[] {
    return this.flowerList;
  }

  searchFlowers(searchTerm: string): string[] {
    if (!searchTerm) {
      return this.flowerList;
    }
    return this.flowerList.filter(flower =>
      flower.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}
