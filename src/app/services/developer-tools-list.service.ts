import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DeveloperToolsService {
  private toolList: string[] = [
    'Visual Studio Code',
    'Git',
    'Figma',
    'Hashnode',
  ];

  addTool(toolName: string) {
    this.toolList.push(toolName);
  }

  removeTool(toolName: string) {
    const index = this.toolList.indexOf(toolName);
    if (index > -1) {
      this.toolList.splice(index, 1);
    }
  }

  clearAll() {
    this.toolList = [];
  }

  getToolList(): string[] {
    return this.toolList;
  }

  searchTools(searchTerm: string): string[] {
    if (!searchTerm) {
      return this.toolList;
    }
    return this.toolList.filter(tool =>
      tool.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}
