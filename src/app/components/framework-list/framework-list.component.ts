import { Component } from '@angular/core';

@Component({
  selector: 'app-framework-list',
  templateUrl: './framework-list.component.html',
  styleUrl: './framework-list.component.css'
})

export class FrameworkListComponent {
  newFramework: string = '';
  frameworkList: string[] = [
    'Angular',
    'React',
    'Vue.js',
    'Django',

  ];

  addFramework() {
    if (this.newFramework.trim()) {
      this.frameworkList.push(this.newFramework.trim());
      this.newFramework = '';
    }
  }

  removeFramework(framework: string) {
    const index = this.frameworkList.indexOf(framework);
    if (index > -1) {
      this.frameworkList.splice(index, 1);
    }
  }
}
