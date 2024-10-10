import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class FoodMenuService {
  private foodMenu: { name: string; price: string }[] = [
    { name: 'Burger', price: '30' },
    { name: 'Pizza', price: '75' },
    { name: 'Pasta', price: '60' }
  ];

  getFoodMenu() {
    return this.foodMenu;
  }

  addFoodItem(food: { name: string; price: string }) {
    this.foodMenu.push(food);
  }

  removeFoodItem(food: { name: string; price: string }) {
    const index = this.foodMenu.indexOf(food);
    if (index > -1) {
      this.foodMenu.splice(index, 1);
    }
  }

  clearAllFoodItems() {
    this.foodMenu = [];
  }
}
