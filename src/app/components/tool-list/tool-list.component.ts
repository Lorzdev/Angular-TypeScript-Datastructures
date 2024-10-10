import { Component } from '@angular/core';
import {ToolService} from "../../services/tool-list.service";

@Component({
  selector: 'app-tool-list',
  templateUrl: './tool-list.component.html',
  styleUrl: './tool-list.component.css'
})

export class ToolListComponent {
  toolName: string = '';
  searchTerm: string = '';
  toolList: string[] = [];
  filteredToolList: string[] = [];

  constructor(private toolService: ToolService) {
    this.toolList = this.toolService.getTools();
    this.filteredToolList = [...this.toolList];
  }

  addTool() {
    if (this.toolName.trim()) {
      this.toolService.addTool(this.toolName.trim());
      this.updateToolList();
      this.toolName = '';
    } else {
      console.log('Please enter a tool name.');
    }
  }

  removeTool(tool: string) {
    this.toolService.removeTool(tool);
    this.updateToolList();
  }

  clearAll() {
    this.toolService.clearAllTools();
    this.updateToolList();
  }

  searchTools() {
    const searchLower = this.searchTerm.toLowerCase();
    this.filteredToolList = this.toolList.filter(tool =>
      tool.toLowerCase().includes(searchLower)
    );
  }

  updateToolList() {
    this.toolList = this.toolService.getTools();
    this.searchTools();
  }
}
