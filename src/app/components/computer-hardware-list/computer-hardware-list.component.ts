import { Component } from '@angular/core';

@Component({
  selector: 'app-computer-hardware-list',
  templateUrl: './computer-hardware-list.component.html',
  styleUrl: './computer-hardware-list.component.css'
})
export class ComputerHardwareListComponent {
  hardwareItem: string = '';
  hardwareList: string[] = [];


  addHardware() {
    if (this.hardwareItem.trim()) {
      this.hardwareList.push(this.hardwareItem.trim());
      this.hardwareItem = '';
    } else {
      console.log('Please enter a hardware component.');
    }
  }

  removeHardware(item: string) {
    const index = this.hardwareList.indexOf(item);
    if (index > -1) {
      this.hardwareList.splice(index, 1);
  }
}
}
