import { Component } from '@angular/core';
import {LaptopService} from "../../services/laptop-list.service";

@Component({
  selector: 'app-laptop-list',
  templateUrl: './laptop-list.component.html',
  styleUrl: './laptop-list.component.css'
})
export class LaptopListComponent {
  laptopModel: string = '';
  searchTerm: string = '';

  constructor(private laptopService: LaptopService) {}

  get laptopList() {
    return this.laptopService.getLaptopList();
  }

  addLaptop() {
    this.laptopService.addLaptop(this.laptopModel);
    this.laptopModel = '';
  }

  removeLaptop(laptop: string) {
    this.laptopService.removeLaptop(laptop);
  }

  clearAll() {
    this.laptopService.clearAll();
  }

  filteredLaptops() {
    return this.laptopService.searchLaptops(this.searchTerm);
  }
}
