import { Component } from '@angular/core';
import {AnimalService} from "../../services/animal-list.service";

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrl: './animal-list.component.css'
})

export class AnimalListComponent {
  animalName: string = '';
  searchTerm: string = '';
  animalList: string[] = [];
  filteredAnimalList: string[] = [];

  constructor(private animalService: AnimalService) {
    this.animalList = this.animalService.getAnimals();
    this.filteredAnimalList = [...this.animalList];
  }

  addAnimal() {
    if (this.animalName.trim()) {
      this.animalService.addAnimal(this.animalName.trim());
      this.updateAnimalList();
      this.animalName = '';
    } else {
      console.log('Please enter an animal name.');
    }
  }

  removeAnimal(animal: string) {
    this.animalService.removeAnimal(animal);
    this.updateAnimalList();
  }

  clearAll() {
    this.animalService.clearAllAnimals();
    this.updateAnimalList();
  }

  searchAnimals() {
    const searchLower = this.searchTerm.toLowerCase();
    this.filteredAnimalList = this.animalList.filter(animal =>
      animal.toLowerCase().includes(searchLower)
    );
  }

  updateAnimalList() {
    this.animalList = this.animalService.getAnimals();
    this.searchAnimals();
  }
}
