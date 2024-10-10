import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CountryService {
  private countryList: { name: string; continent: string }[] = [
    { name: 'Philippines', continent: 'Asia' },
    { name: 'Indonesia', continent: 'Asia' },
    { name: 'Thailand', continent: 'Asia' },
    { name: 'Japan', continent: 'Asia' },
  ];

  getCountries() {
    return this.countryList;
  }

  addCountry(name: string, continent: string) {
    this.countryList.push({ name, continent });
  }

  removeCountry(country: { name: string; continent: string }) {
    const index = this.countryList.indexOf(country);
    if (index > -1) {
      this.countryList.splice(index, 1);
    }
  }

  clearAllCountries() {
    this.countryList = [];
  }
}

export class CountryListService {
}
