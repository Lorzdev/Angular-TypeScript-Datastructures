import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToolService {
  private toolList: string[] = [
    'Hammer',
    'Screwdriver',
    'Wrench',
    'Level'
  ];

  getTools() {
    return this.toolList;
  }

  addTool(tool: string) {
    this.toolList.push(tool);
  }

  removeTool(tool: string) {
    const index = this.toolList.indexOf(tool);
    if (index > -1) {
      this.toolList.splice(index, 1);
    }
  }

  clearAllTools() {
    this.toolList = [];
  }
}
