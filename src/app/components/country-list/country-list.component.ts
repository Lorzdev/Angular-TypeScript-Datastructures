import { Component } from '@angular/core';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrl: './country-list.component.css'
})
export class CountryListComponent {

  countryName: string = '';
  selectedContinent: string = '';
  countryList: { name: string; continent: string }[] = [];

  continents: string[] = ['Philippines', 'Indo', 'Malaysia', 'Thailand', 'Japan', 'Cambodia', 'Singapore'];

  addCountry() {
    if (this.countryName.trim() && this.selectedContinent) {
      const newCountry = {
        name: this.countryName.trim(),
        continent: this.selectedContinent
      };
      this.countryList.push(newCountry);
      this.countryName = '';
      this.selectedContinent = '';
    } else {
    }
  }

  removeCountry(country: { name: string; continent: string }) {
    const index = this.countryList.indexOf(country);
    if (index > -1) {
      this.countryList.splice(index, 1);
    }
  }
}
