import { Component } from '@angular/core';
import {PaintingService} from "../../services/painting-list.service";

@Component({
  selector: 'app-painting-list',
  templateUrl: './painting-list.component.html',
  styleUrl: './painting-list.component.css'
})

export class PaintingListComponent {
  paintingName: string = '';
  searchTerm: string = '';

  constructor(private paintingService: PaintingService) {}

  get paintingList() {
    return this.paintingService.getPaintingList();
  }

  addPainting() {
    this.paintingService.addPainting(this.paintingName);
    this.paintingName = '';
  }

  removePainting(painting: string) {
    this.paintingService.removePainting(painting);
  }

  clearAll() {
    this.paintingService.clearAll();
  }

  filteredPaintings() {
    return this.paintingService.searchPainting(this.searchTerm);
  }
}
