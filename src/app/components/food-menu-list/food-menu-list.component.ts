import { Component } from '@angular/core';

@Component({
  selector: 'app-food-menu-list',
  templateUrl: './food-menu-list.component.html',
  styleUrl: './food-menu-list.component.css'
})
export class FoodMenuListComponent {
  foodItem: string = '';
  foodPrice: string = '';
  foodMenu: { name: string; price: string }[] = [];

  addFoodItem() {
    if (this.foodItem.trim() && this.foodPrice.trim()) {
      const newFood = {
        name: this.foodItem.trim(),
        price: this.foodPrice.trim(),
      };
      this.foodMenu.push(newFood);

      this.foodItem = '';
      this.foodPrice = '';
    } else {
      console.log('Please enter both food item and price.');
    }
  }

  removeFoodItem(food: { name: string; price: string }) {
    const index = this.foodMenu.indexOf(food);
    if (index > -1) {
      this.foodMenu.splice(index, 1);
    }
  }
}
