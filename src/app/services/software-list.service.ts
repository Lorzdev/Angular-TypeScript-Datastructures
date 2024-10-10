import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class SoftwareService {
  private softwareList: string[] = [
    'Adobe Photoshop',
    'Google Chrome',
    'Visual Studio Code',
    'Zoom'
  ];

  getSoftware() {
    return this.softwareList;
  }

  addSoftware(software: string) {
    this.softwareList.push(software);
  }

  removeSoftware(software: string) {
    const index = this.softwareList.indexOf(software);
    if (index > -1) {
      this.softwareList.splice(index, 1);
    }
  }

  clearAllSoftware() {
    this.softwareList = [];
  }
}
