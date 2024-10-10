import { Component } from '@angular/core';
import {MealPlanService} from "../../services/meal-plan-list.service";

@Component({
  selector: 'app-meal-plan-list',
  templateUrl: './meal-plan-list.component.html',
  styleUrl: './meal-plan-list.component.css'
})
export class MealPlanListComponent {
  mealName: string = '';
  searchTerm: string = '';

  constructor(private mealPlanService: MealPlanService) {}

  get mealList() {
    return this.mealPlanService.getMealList();
  }

  addMeal() {
    this.mealPlanService.addMeal(this.mealName);
    this.mealName = '';
  }

  removeMeal(meal: string) {
    this.mealPlanService.removeMeal(meal);
  }

  clearAll() {
    this.mealPlanService.clearAll();
  }

  filteredMeals() {
    return this.mealPlanService.searchMeal(this.searchTerm);
  }
}
