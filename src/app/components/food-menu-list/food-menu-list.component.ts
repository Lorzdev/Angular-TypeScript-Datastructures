import { Component } from '@angular/core';
import {FoodMenuService} from "../../services/food-menu-list.service";

@Component({
  selector: 'app-food-menu-list',
  templateUrl: './food-menu-list.component.html',
  styleUrl: './food-menu-list.component.css'
})
export class FoodMenuListComponent {
  foodItem: string = '';
  foodPrice: string = '';
  searchTerm: string = '';

  foodMenu: { name: string; price: string }[] = [];
  filteredFoodMenu: { name: string; price: string }[] = [];

  constructor(private foodMenuService: FoodMenuService) {
    this.foodMenu = this.foodMenuService.getFoodMenu();
    this.filteredFoodMenu = [...this.foodMenu];
  }

  addFoodItem() {
    if (this.foodItem.trim() && this.foodPrice.trim()) {
      const newFood = {
        name: this.foodItem.trim(),
        price: this.foodPrice.trim(),
      };
      this.foodMenuService.addFoodItem(newFood);
      this.updateFoodMenu();
      this.foodItem = '';
      this.foodPrice = '';
    } else {
      console.log('Please enter both food item and price.');
    }
  }

  removeFoodItem(food: { name: string; price: string }) {
    this.foodMenuService.removeFoodItem(food);
    this.updateFoodMenu();
  }

  clearAll() {
    this.foodMenuService.clearAllFoodItems();
    this.updateFoodMenu();
  }

  searchFoodMenu() {
    const searchLower = this.searchTerm.toLowerCase();
    this.filteredFoodMenu = this.foodMenu.filter(item =>
      item.name.toLowerCase().includes(searchLower)
    );
  }

  updateFoodMenu() {
    this.foodMenu = this.foodMenuService.getFoodMenu();
    this.searchFoodMenu();
  }
}
