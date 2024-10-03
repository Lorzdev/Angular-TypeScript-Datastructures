import { Component } from '@angular/core';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrl: './event-list.component.css'
})
export class EventListComponent {
  newEvent: string = '';
  eventList: string[] = [
    'Science Fair - October 10, 2024',
    'Sports Day - October 20, 2024',
    'Annual School Play - November 10, 2024',

  ];

  addEvent() {
    if (this.newEvent.trim()) {
      this.eventList.push(this.newEvent.trim());
      this.newEvent = ''; // Clear the input field
    }
  }

  removeEvent(event: string) {
    const index = this.eventList.indexOf(event);
    if (index > -1) {
      this.eventList.splice(index, 1);
  }
}
}
