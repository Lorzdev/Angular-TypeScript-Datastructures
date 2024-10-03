import { Component } from '@angular/core';

@Component({
  selector: 'app-library-list',
  templateUrl: './library-list.component.html',
  styleUrl: './library-list.component.css'
})
export class LibraryListComponent {
  newLibrary: string = '';
  libraryList: string[] = [

    'Bootstrap',
    'Moment.js',
    'jQuery',
    'Lodash',

  ];

  addLibrary() {
    if (this.newLibrary.trim()) {
      this.libraryList.push(this.newLibrary.trim());
      this.newLibrary = ''; // Clear the input field
    }
  }

  removeLibrary(library: string) {
    const index = this.libraryList.indexOf(library);
    if (index > -1) {
      this.libraryList.splice(index, 1);
    }
  }
}
