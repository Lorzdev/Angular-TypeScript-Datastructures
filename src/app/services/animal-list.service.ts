import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AnimalService {
  private animalList: string[] = [
    'Lion',
    'Tiger',
    'Elephant',
    'Giraffe'
  ];

  getAnimals() {
    return this.animalList;
  }

  addAnimal(animal: string) {
    this.animalList.push(animal);
  }

  removeAnimal(animal: string) {
    const index = this.animalList.indexOf(animal);
    if (index > -1) {
      this.animalList.splice(index, 1);
    }
  }

  clearAllAnimals() {
    this.animalList = [];
  }
}
