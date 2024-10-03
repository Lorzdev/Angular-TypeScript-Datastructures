import { Component } from '@angular/core';

@Component({
  selector: 'app-presentation-list',
  templateUrl: './presentation-list.component.html',
  styleUrl: './presentation-list.component.css'
})
export class PresentationListComponent {
  topic: string = '';

  presentationList: string[] = [
    'Introduction to Angular',
    'Introduction to Firebase',
    'Understanding TypeScript',
    'Web Development Best Practices',

  ];

  addTopic() {
    if (this.topic.trim()) {
      this.presentationList.push(this.topic.trim());
      this.topic = '';
    } else {
      console.log('Please enter a topic.');
    }
  }

  removeTopic(topic: string) {
    const index = this.presentationList.indexOf(topic);
    if (index > -1) {
      this.presentationList.splice(index, 1);
    }
  }
}
