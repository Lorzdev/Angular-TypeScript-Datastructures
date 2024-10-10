import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class LaptopService {
  private laptopList: string[] = [
    'Dell XPS 13',
    'Apple MacBook Air',
    'HP Spectre x360',
    'Lenovo ThinkPad X1 Carbon',
  ];

  addLaptop(laptop: string) {
    if (laptop.trim()) {
      this.laptopList.push(laptop.trim());
    }
  }

  removeLaptop(laptop: string) {
    const index = this.laptopList.indexOf(laptop);
    if (index > -1) {
      this.laptopList.splice(index, 1);
    }
  }

  clearAll() {
    this.laptopList = [];
  }

  getLaptopList(): string[] {
    return this.laptopList;
  }

  searchLaptops(searchTerm: string): string[] {
    if (!searchTerm) {
      return this.laptopList;
    }
    return this.laptopList.filter(laptop =>
      laptop.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}
