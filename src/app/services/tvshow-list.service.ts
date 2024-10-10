import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class TVShowService {
  private showList: string[] = [
    'Breaking Bad',
    'Stranger Things',
    'The Crown',
    'Game of Thrones',
  ];

  addShow(show: string) {
    if (show.trim()) {
      this.showList.push(show.trim());
    }
  }

  removeShow(show: string) {
    const index = this.showList.indexOf(show);
    if (index > -1) {
      this.showList.splice(index, 1);
    }
  }

  clearAll() {
    this.showList = [];
  }

  getShowList(): string[] {
    return this.showList;
  }

  searchShow(searchTerm: string): string[] {
    if (!searchTerm) {
      return this.showList;
    }
    return this.showList.filter(show =>
      show.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}
