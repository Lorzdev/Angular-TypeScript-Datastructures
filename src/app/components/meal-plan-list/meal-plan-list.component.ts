import { Component } from '@angular/core';

@Component({
  selector: 'app-meal-plan-list',
  templateUrl: './meal-plan-list.component.html',
  styleUrl: './meal-plan-list.component.css'
})
export class MealPlanListComponent {
  mealName: string = '';

  mealList: string[] = [
    'Breakfast: Oatmeal with Fruits',
    'Lunch: Grilled Chicken Salad',
    'Dinner: Spaghetti Bolognese',
    'Snack: Greek Yogurt with Honey',
  ];

  addMeal() {
    if (this.mealName.trim()) {
      this.mealList.push(this.mealName.trim());
      this.mealName = '';
    } else {
      console.log('Please enter a meal name.');
    }
  }

  removeMeal(meal: string) {
    const index = this.mealList.indexOf(meal);
    if (index > -1) {
      this.mealList.splice(index, 1);
    }
  }
}
