import { Component } from '@angular/core';
import {SpecificationsService} from "../../services/laptop-specifications-list.service";

@Component({
  selector: 'app-laptop-specifications-list',
  templateUrl: './laptop-specifications-list.component.html',
  styleUrl: './laptop-specifications-list.component.css'
})
export class LaptopSpecificationsListComponent {
  laptopSpecification: string = '';
  searchTerm: string = '';

  constructor(private specificationsService: SpecificationsService) {}

  get specificationsList() {
    return this.specificationsService.getSpecificationsList();
  }

  addSpecification() {
    this.specificationsService.addSpecification(this.laptopSpecification);
    this.laptopSpecification = '';
  }

  removeSpecification(spec: string) {
    this.specificationsService.removeSpecification(spec);
  }

  clearAll() {
    this.specificationsService.clearAll();
  }

  filteredSpecifications() {
    return this.specificationsService.searchSpecifications(this.searchTerm);
  }
}
