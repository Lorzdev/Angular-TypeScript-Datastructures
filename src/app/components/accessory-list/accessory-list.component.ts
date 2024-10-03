import { Component } from '@angular/core';

@Component({
  selector: 'app-accessory-list',

  templateUrl: './accessory-list.component.html',
  styleUrl: './accessory-list.component.css'
})
export class AccessoryListComponent {
  accessoryName: string = '';
  accessoryList: string[] = [];

  addAccessory() {
    if (this.accessoryName.trim()) {
      this.accessoryList.push(this.accessoryName.trim());
      this.accessoryName = '';
    }
  }

  removeAccessory(accessory: string) {
    const index = this.accessoryList.indexOf(accessory);
    if (index > -1) {
      this.accessoryList.splice(index, 1);
    }
  }
}
