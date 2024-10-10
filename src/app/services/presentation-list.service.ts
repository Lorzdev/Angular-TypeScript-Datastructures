import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class PresentationService {
  private presentationList: string[] = [
    'Introduction to Angular',
    'Introduction to Firebase',
    'Understanding TypeScript',
    'Web Development Best Practices',
  ];

  addTopic(topic: string) {
    this.presentationList.push(topic);
  }

  removeTopic(topic: string) {
    const index = this.presentationList.indexOf(topic);
    if (index > -1) {
      this.presentationList.splice(index, 1);
    }
  }

  clearAll() {
    this.presentationList = [];
  }

  getPresentationList(): string[] {
    return this.presentationList;
  }

  searchPresentation(searchTerm: string): string[] {
    if (!searchTerm) {
      return this.presentationList;
    }
    return this.presentationList.filter(topic =>
      topic.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}
