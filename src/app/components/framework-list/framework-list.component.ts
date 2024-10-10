import { Component } from '@angular/core';
import {FrameworkService} from "../../services/framework-list.service";

@Component({
  selector: 'app-framework-list',
  templateUrl: './framework-list.component.html',
  styleUrl: './framework-list.component.css'
})


export class FrameworkListComponent {
  newFramework: string = '';
  searchTerm: string = '';

  constructor(private frameworkService: FrameworkService) {}

  get frameworkList() {
    return this.frameworkService.getFrameworkList();
  }

  addFramework() {
    if (this.newFramework.trim()) {
      this.frameworkService.addFramework(this.newFramework.trim());
      this.newFramework = ''; // Clear the input field
    } else {
      console.log('Please enter a framework name.');
    }
  }

  removeFramework(framework: string) {
    this.frameworkService.removeFramework(framework);
  }

  clearAll() {
    this.frameworkService.clearAll();
  }

  filteredFrameworkList() {
    return this.frameworkService.searchFrameworks(this.searchTerm);
  }
}
