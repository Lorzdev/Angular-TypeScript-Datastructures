import { Component } from '@angular/core';

@Component({
  selector: 'app-laptop-specifications-list',
  templateUrl: './laptop-specifications-list.component.html',
  styleUrl: './laptop-specifications-list.component.css'
})
export class LaptopSpecificationsListComponent {
  laptopSpecification: string = '';
  specificationsList: string[] = [];

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
