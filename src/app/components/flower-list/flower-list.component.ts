import { Component } from '@angular/core';

@Component({
  selector: 'app-flower-list',
  templateUrl: './flower-list.component.html',
  styleUrl: './flower-list.component.css'
})
export class FlowerListComponent {
  flowerName: string = '';

  flowerList: string[] = [
    'Rose',
    'Tulip',
    'Sunflower',
    'Daisy',
  ];

  addFlower() {
    if (this.flowerName.trim()) {
      this.flowerList.push(this.flowerName.trim());
      this.flowerName = '';
    } else {
      console.log('Please enter a flower name.');
    }
  }

  removeFlower(flower: string) {
    const index = this.flowerList.indexOf(flower);
    if (index > -1) {
      this.flowerList.splice(index, 1);
    }
  }
}
