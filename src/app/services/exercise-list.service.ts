import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {
  private exerciseList: string[] = [
    'Push-ups',
    'Squats',
    'Jumping Jacks',
    'Bicep Curls',
  ];

  addExercise(exercise: string) {
    if (exercise.trim()) {
      this.exerciseList.push(exercise.trim());
    }
  }

  removeExercise(exercise: string) {
    const index = this.exerciseList.indexOf(exercise);
    if (index > -1) {
      this.exerciseList.splice(index, 1);
    }
  }

  clearAll() {
    this.exerciseList = [];
  }

  getExerciseList(): string[] {
    return this.exerciseList;
  }

  searchExercise(searchTerm: string): string[] {
    if (!searchTerm) {
      return this.exerciseList;
    }
    return this.exerciseList.filter(exercise =>
      exercise.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}
