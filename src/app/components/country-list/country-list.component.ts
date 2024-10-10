import { Component } from '@angular/core';
import {CountryService} from "../../services/country-list.service";

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrl: './country-list.component.css'
})

export class CountryListComponent {
  countryName: string = '';
  selectedContinent: string = '';
  searchTerm: string = '';
  countryList: { name: string; continent: string }[] = [];
  filteredCountryList: { name: string; continent: string }[] = [];
  continents: string[] = ['Asia', 'Europe', 'Africa', 'North America', 'South America', 'Australia', 'Antarctica'];

  constructor(private countryService: CountryService) {
    this.countryList = this.countryService.getCountries();
    this.filteredCountryList = [...this.countryList];
  }

  addCountry() {
    if (this.countryName.trim() && this.selectedContinent) {
      this.countryService.addCountry(this.countryName.trim(), this.selectedContinent);
      this.updateCountryList();
      this.countryName = '';
      this.selectedContinent = '';
    } else {
      console.log('Please fill out all fields.');
    }
  }

  removeCountry(country: { name: string; continent: string }) {
    this.countryService.removeCountry(country);
    this.updateCountryList();
  }

  clearAll() {
    this.countryService.clearAllCountries();
    this.updateCountryList();
  }

  searchCountries() {
    const searchLower = this.searchTerm.toLowerCase();
    this.filteredCountryList = this.countryList.filter(country =>
      country.name.toLowerCase().includes(searchLower) ||
      country.continent.toLowerCase().includes(searchLower)
    );
  }

  updateCountryList() {
    this.countryList = this.countryService.getCountries();
    this.searchCountries();
  }
}
