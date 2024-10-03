import { Component } from '@angular/core';

@Component({
  selector: 'app-tool-list',
  templateUrl: './tool-list.component.html',
  styleUrl: './tool-list.component.css'
})
export class ToolListComponent {
  toolName: string = '';

  // Initialize toolList with predefined tools
  toolList: string[] = [
    'Hammer',
    'Screwdriver',
    'Wrench',
    'Level'
  ];

  addTool() {
    if (this.toolName.trim()) {
      this.toolList.push(this.toolName.trim());
      this.toolName = ''; // Clear the input field
    } else {
      console.log('Please enter a tool name.');
    }
  }

  removeTool(tool: string) {
    const index = this.toolList.indexOf(tool);
    if (index > -1) {
      this.toolList.splice(index, 1);
    }
  }
}
