import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CarModelService {
  private carModelList: { model: string }[] = [
    { model: 'Toyota Corolla' },
    { model: 'Honda Civic' },
    { model: 'Ford Mustang' },
    { model: 'Chevrolet Camaro' },
  ];

  getCarModels() {
    return this.carModelList;
  }

  addCarModel(carModel: { model: string }) {
    this.carModelList.push(carModel);
  }

  removeCarModel(carModel: { model: string }) {
    const index = this.carModelList.indexOf(carModel);
    if (index > -1) {
      this.carModelList.splice(index, 1);
    }
  }

  clearAllCarModels() {
    this.carModelList = [];
  }
}
