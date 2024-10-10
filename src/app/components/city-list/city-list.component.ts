import { Component } from '@angular/core';
import{CityService} from "../../services/city-list.service";

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrl: './city-list.component.css'
})
export class CityListComponent {
  cityName: string = '';
  searchTerm: string = '';
  cityList: string[] = [];
  filteredCityList: string[] = [];

  constructor(private cityService: CityService) {
    this.cityList = this.cityService.getCities();
    this.filteredCityList = [...this.cityList];
  }

  addCity() {
    if (this.cityName.trim()) {
      this.cityService.addCity(this.cityName.trim());
      this.updateCityLists();
      this.cityName = '';
    } else {
      console.log('Please enter a city name.');
    }
  }

  removeCity(city: string) {
    this.cityService.removeCity(city);
    this.updateCityLists();
  }

  clearAll() {
    this.cityService.clearAllCities();
    this.updateCityLists();
  }

  searchCities() {
    const searchLower = this.searchTerm.toLowerCase();
    this.filteredCityList = this.cityList.filter(city =>
      city.toLowerCase().includes(searchLower)
    );
  }

  updateCityLists() {
    this.cityList = this.cityService.getCities();
    this.searchCities();
  }
}
