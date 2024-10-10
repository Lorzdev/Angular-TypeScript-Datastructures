import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CityService {
  private cityList: string[] = [
    'Caloocan City',
    'Quezon City',
    'Pasig City',
    'Makati City',
  ];

  getCities() {
    return this.cityList;
  }

  addCity(city: string) {
    this.cityList.push(city);
  }

  removeCity(city: string) {
    const index = this.cityList.indexOf(city);
    if (index > -1) {
      this.cityList.splice(index, 1);
    }
  }

  clearAllCities() {
    this.cityList = [];
  }
}
