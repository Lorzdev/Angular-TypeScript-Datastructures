import { Component } from '@angular/core';

@Component({
  selector: 'app-laptop-specifications-list',
  templateUrl: './laptop-specifications-list.component.html',
  styleUrl: './laptop-specifications-list.component.css'
})
export class LaptopSpecificationsListComponent {
  laptopSpecification: string = '';

  specificationsList: string[] = [
    'Lenovo ThinkPad X1 Carbon: Intel Core i7, 16GB RAM, 1TB SSD',
    'NVIDIA GeForce GTX 1650',
    'MacBook Air: Apple M1, 8GB RAM, 256GB SSD'
  ];

  addSpecification() {
    if (this.laptopSpecification.trim()) {
      this.specificationsList.push(this.laptopSpecification.trim());
      this.laptopSpecification = '';
    } else {
      console.log('Please enter a laptop specification.');
    }
  }

  removeSpecification(spec: string) {
    const index = this.specificationsList.indexOf(spec);
    if (index > -1) {
      this.specificationsList.splice(index, 1);
    }
  }
}
