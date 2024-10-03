import { Component } from '@angular/core';

@Component({
  selector: 'app-tvshow-list',
  templateUrl: './tvshow-list.component.html',
  styleUrl: './tvshow-list.component.css'
})
export class TVShowListComponent {
  showName: string = '';

  showList: string[] = [
    'Breaking Bad',
    'Stranger Things',
    'The Crown',
    'Game of Thrones',
  ];

  addShow() {
    if (this.showName.trim()) {
      this.showList.push(this.showName.trim());
      this.showName = '';
    } else {
      console.log('Please enter a show name.');
    }
  }

  removeShow(show: string) {
    const index = this.showList.indexOf(show);
    if (index > -1) {
      this.showList.splice(index, 1); 
    }
  }
}
