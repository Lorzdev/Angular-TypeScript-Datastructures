import { Component } from '@angular/core';
import {EventService} from "../../services/event-list.service";

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrl: './event-list.component.css'
})
export class EventListComponent {
  newEvent: string = '';
  searchTerm: string = '';

  constructor(private eventService: EventService) {}

  get eventList() {
    return this.eventService.getEventList();
  }

  addEvent() {
    if (this.newEvent.trim()) {
      this.eventService.addEvent(this.newEvent.trim());
      this.newEvent = ''; // Clear the input field
    } else {
      console.log('Please enter an event name.');
    }
  }

  removeEvent(event: string) {
    this.eventService.removeEvent(event);
  }

  clearAll() {
    this.eventService.clearAll();
  }

  filteredEventList() {
    return this.eventService.searchEvents(this.searchTerm);
  }
}
