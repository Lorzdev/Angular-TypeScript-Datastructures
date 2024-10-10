import { Component } from '@angular/core';
import {LibraryService} from "../../services/library-list.service";

@Component({
  selector: 'app-library-list',
  templateUrl: './library-list.component.html',
  styleUrl: './library-list.component.css'
})
export class LibraryListComponent {
  newLibrary: string = '';
  searchTerm: string = '';

  constructor(private libraryService: LibraryService) {}

  get libraryList() {
    return this.libraryService.getLibraryList();
  }

  addLibrary() {
    if (this.newLibrary.trim()) {
      this.libraryService.addLibrary(this.newLibrary.trim());
      this.newLibrary = ''; // Clear the input field
    } else {
      console.log('Please enter a library name.');
    }
  }

  removeLibrary(library: string) {
    this.libraryService.removeLibrary(library);
  }

  clearAll() {
    this.libraryService.clearAll();
  }

  filteredLibraryList() {
    return this.libraryService.searchLibraries(this.searchTerm);
  }
}
