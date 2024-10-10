import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class HardwareService {
  private hardwareList: string[] = [
    'Processor',
    'Motherboard',
    'Power Supply',
    'Graphics Card',
  ];

  addHardware(hardware: string) {
    if (hardware.trim()) {
      this.hardwareList.push(hardware.trim());
    }
  }

  removeHardware(hardware: string) {
    const index = this.hardwareList.indexOf(hardware);
    if (index > -1) {
      this.hardwareList.splice(index, 1);
    }
  }

  clearAll() {
    this.hardwareList = [];
  }

  getHardwareList(): string[] {
    return this.hardwareList;
  }

  searchHardware(searchTerm: string): string[] {
    if (!searchTerm) {
      return this.hardwareList;
    }
    return this.hardwareList.filter(item =>
      item.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}
