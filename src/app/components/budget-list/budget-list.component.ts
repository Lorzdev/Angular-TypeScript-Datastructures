import { Component } from '@angular/core';
import {BudgetService} from "../../services/budget-list.service";

@Component({
  selector: 'app-budget-list',
  templateUrl: './budget-list.component.html',
  styleUrl: './budget-list.component.css'
})
export class BudgetListComponent {
  itemName: string = '';
  itemAmount: number | null = null;
  searchTerm: string = '';

  constructor(private budgetService: BudgetService) {}

  get budgetList() {
    return this.budgetService.getBudgetList();
  }

  addBudgetItem() {
    if (this.itemName.trim() && this.itemAmount !== null) {
      const newItem = {
        name: this.itemName.trim(),
        amount: this.itemAmount,
      };
      this.budgetService.addBudgetItem(newItem);
      this.itemName = '';
      this.itemAmount = null;
    } else {
      console.log('Please enter both item name and amount.');
    }
  }

  removeBudgetItem(item: { name: string; amount: number }) {
    this.budgetService.removeBudgetItem(item);
  }

  clearAll() {
    this.budgetService.clearAll();
  }

  filteredBudgetList() {
    return this.budgetService.searchBudget(this.searchTerm);
  }
}
