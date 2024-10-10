import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class VegetableService {
  private vegetableList: string[] = [
    'Carrot',
    'Potato',
    'Tomato',
    'Cucumber'
  ];

  getVegetables() {
    return this.vegetableList;
  }

  addVegetable(vegetable: string) {
    this.vegetableList.push(vegetable);
  }

  removeVegetable(vegetable: string) {
    const index = this.vegetableList.indexOf(vegetable);
    if (index > -1) {
      this.vegetableList.splice(index, 1);
    }
  }

  clearAllVegetables() {
    this.vegetableList = [];
  }
}
