import { Component } from '@angular/core';

@Component({
  selector: 'app-destination-list',
  templateUrl: './destination-list.component.html',
  styleUrl: './destination-list.component.css'
})
export class DestinationListComponent {
  destinationName: string = '';
  destinationList: string[] = [];

  addDestination() {
    if (this.destinationName.trim()) {
      this.destinationList.push(this.destinationName.trim());
      this.destinationName = '';
    } else {
      console.log('Please enter a destination name.');
    }
  }

  removeDestination(destination: string) {
    const index = this.destinationList.indexOf(destination);
    if (index > -1) {
      this.destinationList.splice(index, 1);
    }
  }
}
