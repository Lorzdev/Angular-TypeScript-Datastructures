import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class PaintingService {
  private paintingList: string[] = [
    'Starry Night',
    'Mona Lisa',
    'The Persistence of Memory',
    'The Night Watch',
  ];

  addPainting(painting: string) {
    if (painting.trim()) {
      this.paintingList.push(painting.trim());
    }
  }

  removePainting(painting: string) {
    const index = this.paintingList.indexOf(painting);
    if (index > -1) {
      this.paintingList.splice(index, 1);
    }
  }

  clearAll() {
    this.paintingList = [];
  }

  getPaintingList(): string[] {
    return this.paintingList;
  }

  searchPainting(searchTerm: string): string[] {
    if (!searchTerm) {
      return this.paintingList;
    }
    return this.paintingList.filter(painting =>
      painting.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}
