import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class FrameworkService {
  private frameworkList: string[] = [
    'Angular',
    'React',
    'Vue.js',
    'Django',
  ];

  addFramework(frameworkName: string) {
    this.frameworkList.push(frameworkName);
  }

  removeFramework(frameworkName: string) {
    const index = this.frameworkList.indexOf(frameworkName);
    if (index > -1) {
      this.frameworkList.splice(index, 1);
    }
  }

  clearAll() {
    this.frameworkList = [];
  }

  getFrameworkList(): string[] {
    return this.frameworkList;
  }

  searchFrameworks(searchTerm: string): string[] {
    if (!searchTerm) {
      return this.frameworkList;
    }
    return this.frameworkList.filter(framework =>
      framework.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}
