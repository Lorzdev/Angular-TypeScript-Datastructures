import { Component } from '@angular/core';
import {CarModelService} from "../../services/car-model-list.service";

@Component({
  selector: 'app-car-model-list',
  templateUrl: './car-model-list.component.html',
  styleUrl: './car-model-list.component.css'
})
export class CarModelListComponent {
  carModel: string = '';
  searchTerm: string = '';
  carModelList: { model: string }[] = [];
  filteredCarModelList: { model: string }[] = [];

  constructor(private carModelService: CarModelService) {
    this.carModelList = this.carModelService.getCarModels();
    this.filteredCarModelList = [...this.carModelList];
  }

  addCarModel() {
    if (this.carModel.trim()) {
      const newCarModel = { model: this.carModel.trim() };
      this.carModelService.addCarModel(newCarModel);
      this.updateCarModelLists();
      this.carModel = '';
    } else {
      console.log('Please fill out the car model field.');
    }
  }

  removeCarModel(carModel: { model: string }) {
    this.carModelService.removeCarModel(carModel);
    this.updateCarModelLists();
  }

  clearAll() {
    this.carModelService.clearAllCarModels();
    this.updateCarModelLists();
  }

  searchCarModels() {
    const searchLower = this.searchTerm.toLowerCase();
    this.filteredCarModelList = this.carModelList.filter(car =>
      car.model.toLowerCase().includes(searchLower)
    );
  }

  updateCarModelLists() {
    this.carModelList = this.carModelService.getCarModels(); // Get updated list
    this.searchCarModels();
  }
}
