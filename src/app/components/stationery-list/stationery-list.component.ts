import { Component } from '@angular/core';
import {StationeryService} from "../../services/stationery-list.service";

@Component({
  selector: 'app-stationery-list',
  templateUrl: './stationery-list.component.html',
  styleUrl: './stationery-list.component.css'
})
export class StationeryListComponent {
  stationeryItem: string = '';
  searchTerm: string = '';

  constructor(private stationeryService: StationeryService) {}

  get stationeryList() {
    return this.stationeryService.getStationeryList();
  }

  addStationery() {
    this.stationeryService.addStationery(this.stationeryItem);
    this.stationeryItem = '';
  }

  removeStationery(item: string) {
    this.stationeryService.removeStationery(item);
  }

  clearAll() {
    this.stationeryService.clearAll(); // Clear all items
  }

  filteredStationeryList() {
    return this.stationeryService.searchStationery(this.searchTerm);
  }
}
