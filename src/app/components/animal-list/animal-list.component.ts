import { Component } from '@angular/core';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrl: './animal-list.component.css'
})
export class AnimalListComponent {

  animalName: string = '';
  animalList: string[] = [];

  addAnimal() {
    if (this.animalName.trim()) {
      this.animalList.push(this.animalName.trim());
      this.animalName = '';
    } else {
      console.log('Please enter an animal name.');
    }
  }

  removeAnimal(animal: string) {
    const index = this.animalList.indexOf(animal);
    if (index > -1) {
      this.animalList.splice(index, 1);
    }
  }
}
