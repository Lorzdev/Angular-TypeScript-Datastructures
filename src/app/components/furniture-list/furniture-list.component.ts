import { Component } from '@angular/core';

@Component({
  selector: 'app-furniture-list',
  templateUrl: './furniture-list.component.html',
  styleUrl: './furniture-list.component.css'
})
export class FurnitureListComponent {
  furnitureName: string = '';


  furnitureList: string[] = [
    'Recliner',
    'Wardrobe',
    'Dining Table',
    'Coffee Table',
  ];

  addFurniture() {
    if (this.furnitureName.trim()) {
      this.furnitureList.push(this.furnitureName.trim());
      this.furnitureName = '';
    } else {
      console.log('Please enter a furniture name.');
    }
  }

  removeFurniture(furniture: string) {
    const index = this.furnitureList.indexOf(furniture);
    if (index > -1) {
      this.furnitureList.splice(index, 1);
    }
  }
}
