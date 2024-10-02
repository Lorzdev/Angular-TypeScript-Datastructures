import { Component } from '@angular/core';

@Component({
  selector: 'app-vegetable-list',
  templateUrl: './vegetable-list.component.html',
  styleUrl: './vegetable-list.component.css'
})
export class VegetableListComponent {

  vegetableName: string = '';
  vegetableList: string[] = [];

  addVegetable() {
    if (this.vegetableName.trim()) {
      this.vegetableList.push(this.vegetableName.trim());
      this.vegetableName = ''; // Clear the input field
    } else {
      console.log('Please enter a vegetable name.');
    }
  }

  removeVegetable(vegetable: string) {
    const index = this.vegetableList.indexOf(vegetable);
    if (index > -1) {
      this.vegetableList.splice(index, 1);
    }
  }
}
