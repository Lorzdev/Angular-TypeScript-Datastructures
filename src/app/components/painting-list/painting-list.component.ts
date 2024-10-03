import { Component } from '@angular/core';

@Component({
  selector: 'app-painting-list',
  templateUrl: './painting-list.component.html',
  styleUrl: './painting-list.component.css'
})
export class PaintingListComponent {
  paintingName: string = '';

  paintingList: string[] = [
    'Starry Night',
    'Mona Lisa',
    'The Persistence of Memory',
    'The Night Watch',

  ];

  addPainting() {
    if (this.paintingName.trim()) {
      this.paintingList.push(this.paintingName.trim());
      this.paintingName = '';
      console.log('Please enter a painting name.');
    }
  }

  removePainting(painting: string) {
    const index = this.paintingList.indexOf(painting);
    if (index > -1) {
      this.paintingList.splice(index, 1);
    }
  }
}
