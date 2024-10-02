import { Component } from '@angular/core';

@Component({
  selector: 'app-car-model-list',
  templateUrl: './car-model-list.component.html',
  styleUrl: './car-model-list.component.css'
})
export class CarModelListComponent {
  carModel: string = '';
  carModelList: { model: string }[] = [];

  addCarModel() {
    if (this.carModel.trim()) {
      const newCarModel = {
        model: this.carModel.trim()
      };
      this.carModelList.push(newCarModel);
      this.carModel = '';
    } else {
      console.log('Please fill out the car model field.');
    }
  }

  removeCarModel(car: { model: string }) {
    const index = this.carModelList.indexOf(car);
    if (index > -1) {
      this.carModelList.splice(index, 1);
    }
  }
}
