import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class LibraryService {
  private libraryList: string[] = [
    'Bootstrap',
    'Moment.js',
    'jQuery',
    'Lodash',
  ];

  addLibrary(libraryName: string) {
    this.libraryList.push(libraryName);
  }

  removeLibrary(libraryName: string) {
    const index = this.libraryList.indexOf(libraryName);
    if (index > -1) {
      this.libraryList.splice(index, 1);
    }
  }

  clearAll() {
    this.libraryList = [];
  }

  getLibraryList(): string[] {
    return this.libraryList;
  }

  searchLibraries(searchTerm: string): string[] {
    if (!searchTerm) {
      return this.libraryList;
    }
    return this.libraryList.filter(library =>
      library.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}
