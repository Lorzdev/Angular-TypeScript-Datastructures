import { Component } from '@angular/core';
import {DeveloperToolsService} from "../../services/developer-tools-list.service";

@Component({
  selector: 'app-developer-tools-list',
  templateUrl: './developer-tools-list.component.html',
  styleUrl: './developer-tools-list.component.css'
})
export class DeveloperToolsListComponent {
  newTool: string = '';
  searchTerm: string = '';

  constructor(private developerToolsService: DeveloperToolsService) {}

  get toolList() {
    return this.developerToolsService.getToolList();
  }

  addTool() {
    if (this.newTool.trim()) {
      this.developerToolsService.addTool(this.newTool.trim());
      this.newTool = ''; // Clear the input field
    } else {
      console.log('Please enter a tool name.');
    }
  }

  removeTool(tool: string) {
    this.developerToolsService.removeTool(tool);
  }

  clearAll() {
    this.developerToolsService.clearAll();
  }

  filteredToolList() {
    return this.developerToolsService.searchTools(this.searchTerm);
  }
}

