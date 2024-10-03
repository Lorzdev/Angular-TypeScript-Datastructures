import { Component } from '@angular/core';

@Component({
  selector: 'app-developer-tools-list',
  templateUrl: './developer-tools-list.component.html',
  styleUrl: './developer-tools-list.component.css'
})
export class DeveloperToolsListComponent {
  newTool: string = '';

  toolList: string[] = [
    'Visual Studio Code',
    'Git',
    'Figma',
    'Hashnode',
  ];

  addTool() {
    if (this.newTool.trim()) {
      this.toolList.push(this.newTool.trim());
      this.newTool = '';
    }
  }

  removeTool(tool: string) {
    const index = this.toolList.indexOf(tool);
    if (index > -1) {
      this.toolList.splice(index, 1);
    }
  }
}

