import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FruitService {
  private fruitList: string[] = ['Apple', 'Strawberry', 'Orange', 'Pineapple'];

  getFruits() {
    return this.fruitList;
  }

  addFruit(fruit: string) {
    this.fruitList.push(fruit);
  }

  removeFruit(index: number) {
    this.fruitList.splice(index, 1);
  }

  clearAllFruits() {
    this.fruitList = [];
  }
}

export class FruitListService {
}
