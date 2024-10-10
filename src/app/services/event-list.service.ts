import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class EventService {
  private eventList: string[] = [
    'Science Fair - October 10, 2024',
    'Sports Day - October 20, 2024',
    'Annual School Play - November 10, 2024',
  ];

  addEvent(eventName: string) {
    this.eventList.push(eventName);
  }

  removeEvent(eventName: string) {
    const index = this.eventList.indexOf(eventName);
    if (index > -1) {
      this.eventList.splice(index, 1);
    }
  }

  clearAll() {
    this.eventList = [];
  }

  getEventList(): string[] {
    return this.eventList;
  }

  searchEvents(searchTerm: string): string[] {
    if (!searchTerm) {
      return this.eventList;
    }
    return this.eventList.filter(event =>
      event.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}
