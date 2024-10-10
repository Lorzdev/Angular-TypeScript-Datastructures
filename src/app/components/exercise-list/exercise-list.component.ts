import { Component } from '@angular/core';
import {ExerciseService} from "../../services/exercise-list.service";

@Component({
  selector: 'app-exercise-list',

  templateUrl: './exercise-list.component.html',
  styleUrl: './exercise-list.component.css'
})

export class ExerciseListComponent {
  exerciseName: string = '';
  searchTerm: string = '';

  constructor(private exerciseService: ExerciseService) {}

  get exerciseList() {
    return this.exerciseService.getExerciseList();
  }

  addExercise() {
    this.exerciseService.addExercise(this.exerciseName);
    this.exerciseName = '';
  }

  removeExercise(exercise: string) {
    this.exerciseService.removeExercise(exercise);
  }

  clearAll() {
    this.exerciseService.clearAll();
  }

  filteredExercises() {
    return this.exerciseService.searchExercise(this.searchTerm);
  }
}
