import { Component } from '@angular/core';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrl: './city-list.component.css'
})
export class CityListComponent {

  cityName: string = '';
  cityList: string[] = [];

  addCity() {
    if (this.cityName.trim()) {
      this.cityList.push(this.cityName.trim());
      this.cityName = '';
    } else {
      console.log('Please enter a city name.');
    }
  }

  removeCity(city: string) {
    const index = this.cityList.indexOf(city);
    if (index > -1) {
      this.cityList.splice(index, 1);
    }
  }
}
