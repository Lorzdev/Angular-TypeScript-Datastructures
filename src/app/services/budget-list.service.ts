import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class BudgetService {
  private budgetList: { name: string; amount: number }[] = [
    { name: 'Groceries', amount: 500 },
    { name: 'Utilities', amount: 150 },
    { name: 'Rent', amount: 1200 },
    { name: 'Transportation', amount: 100 },
  ];

  addBudgetItem(item: { name: string; amount: number }) {
    this.budgetList.push(item);
  }

  removeBudgetItem(item: { name: string; amount: number }) {
    const index = this.budgetList.indexOf(item);
    if (index > -1) {
      this.budgetList.splice(index, 1);
    }
  }

  clearAll() {
    this.budgetList = [];
  }

  getBudgetList(): { name: string; amount: number }[] {
    return this.budgetList;
  }

  searchBudget(searchTerm: string): { name: string; amount: number }[] {
    if (!searchTerm) {
      return this.budgetList;
    }
    return this.budgetList.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}
