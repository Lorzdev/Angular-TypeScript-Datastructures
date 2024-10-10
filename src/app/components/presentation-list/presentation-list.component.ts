import { Component } from '@angular/core';
import {PresentationService} from "../../services/presentation-list.service";

@Component({
  selector: 'app-presentation-list',
  templateUrl: './presentation-list.component.html',
  styleUrl: './presentation-list.component.css'
})
export class PresentationListComponent {
  topic: string = '';
  searchTerm: string = '';

  constructor(private presentationService: PresentationService) {}

  get presentationList() {
    return this.presentationService.getPresentationList();
  }

  addTopic() {
    if (this.topic.trim()) {
      this.presentationService.addTopic(this.topic.trim());
      this.topic = '';
    } else {
      console.log('Please enter a topic.');
    }
  }

  removeTopic(topic: string) {
    this.presentationService.removeTopic(topic);
  }

  clearAll() {
    this.presentationService.clearAll();
  }

  filteredPresentationList() {
    return this.presentationService.searchPresentation(this.searchTerm);
  }
}
