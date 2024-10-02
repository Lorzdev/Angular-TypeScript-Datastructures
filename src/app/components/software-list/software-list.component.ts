import { Component } from '@angular/core';

@Component({
  selector: 'app-software-list',
  templateUrl: './software-list.component.html',
  styleUrl: './software-list.component.css'
})
export class SoftwareListComponent {

  softwareName: string = '';
  softwareList: string[] = [];

  addSoftware() {
    if (this.softwareName.trim()) {
      this.softwareList.push(this.softwareName.trim());
      this.softwareName = '';
    } else {
      console.log('Please enter a software name.');
    }
  }

  removeSoftware(software: string) {
    const index = this.softwareList.indexOf(software);
    if (index > -1) {
      this.softwareList.splice(index, 1);
    }
  }
}

