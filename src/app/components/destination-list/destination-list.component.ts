import { Component } from '@angular/core';
import {DestinationService} from "../../services/destination-list.service";

@Component({
  selector: 'app-destination-list',
  templateUrl: './destination-list.component.html',
  styleUrl: './destination-list.component.css'
})
export class DestinationListComponent {
  destinationName: string = '';
  searchTerm: string = '';

  constructor(private destinationService: DestinationService) {}

  get destinationList() {
    return this.destinationService.getDestinationList();
  }

  addDestination() {
    this.destinationService.addDestination(this.destinationName);
    this.destinationName = '';
  }

  removeDestination(destination: string) {
    this.destinationService.removeDestination(destination);
  }

  clearAll() {
    this.destinationService.clearAll();
  }

  filteredDestinations() {
    return this.destinationService.searchDestinations(this.searchTerm);
  }
}
