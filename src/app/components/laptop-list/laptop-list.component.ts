import { Component } from '@angular/core';

@Component({
  selector: 'app-laptop-list',
  templateUrl: './laptop-list.component.html',
  styleUrl: './laptop-list.component.css'
})
export class LaptopListComponent {
  laptopModel: string = '';


  laptopList: string[] = [
    'Dell XPS 13',
    'Apple MacBook Air',
    'HP Spectre x360',
    'Lenovo ThinkPad X1 Carbon',
    'Asus ZenBook 14'
  ];

  addLaptop() {
    if (this.laptopModel.trim()) {
      this.laptopList.push(this.laptopModel.trim());
      this.laptopModel = '';
    } else {
      console.log('Please enter a laptop model.');
    }
  }

  removeLaptop(laptop: string) {
    const index = this.laptopList.indexOf(laptop);
    if (index > -1) {
      this.laptopList.splice(index, 1);
    }
  }
}
