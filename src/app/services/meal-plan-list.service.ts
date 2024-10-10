import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MealPlanService {
  private mealList: string[] = [
    'Breakfast: Oatmeal with Fruits',
    'Lunch: Grilled Chicken Salad',
    'Dinner: Spaghetti Bolognese',
    'Snack: Greek Yogurt with Honey',
  ];

  addMeal(meal: string) {
    if (meal.trim()) {
      this.mealList.push(meal.trim());
    }
  }

  removeMeal(meal: string) {
    const index = this.mealList.indexOf(meal);
    if (index > -1) {
      this.mealList.splice(index, 1);
    }
  }

  clearAll() {
    this.mealList = [];
  }

  getMealList(): string[] {
    return this.mealList;
  }

  searchMeal(searchTerm: string): string[] {
    if (!searchTerm) {
      return this.mealList;
    }
    return this.mealList.filter(meal =>
      meal.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}
