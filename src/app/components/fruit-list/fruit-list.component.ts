import { Component } from '@angular/core';

@Component({
  selector: 'app-fruit-list',
  templateUrl: './fruit-list.component.html',
  styleUrl: './fruit-list.component.css'
})
export class FruitListComponent {

  fruitName: string = '';
  fruitList: string[] = [];

  addFruit() {
    if (this.fruitName.trim()) {
      this.fruitList.push(this.fruitName.trim());
      this.fruitName = '';
    } else {
      console.log('Please enter a fruit name.');
    }
  }
}
