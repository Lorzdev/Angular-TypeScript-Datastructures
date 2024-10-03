import { Component } from '@angular/core';

@Component({
  selector: 'app-meal-plan-list',
  templateUrl: './meal-plan-list.component.html',
  styleUrl: './meal-plan-list.component.css'
})
export class MealPlanListComponent {
  mealName: string = '';
  mealList: string[] = [];

  addMeal() {
    if (this.mealName.trim()) {
      this.mealList.push(this.mealName.trim());
      this.mealName = '';
    }
  }

  removeMeal(meal: string) {
    const index = this.mealList.indexOf(meal);
    if (index > -1) {
      this.mealList.splice(index, 1);
    }
  }
}
