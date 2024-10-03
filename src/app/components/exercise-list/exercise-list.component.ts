import { Component } from '@angular/core';

@Component({
  selector: 'app-exercise-list',

  templateUrl: './exercise-list.component.html',
  styleUrl: './exercise-list.component.css'
})

export class ExerciseListComponent {
  exerciseName: string = '';

  exerciseList: string[] = [
    'Push-ups',
    'Squats',
    'Jumping Jacks',
    'Bicep Curls',

  ];

  addExercise() {
    if (this.exerciseName.trim()) {
      this.exerciseList.push(this.exerciseName.trim());
      this.exerciseName = '';
    } else {
      console.log('Please enter an exercise name.');
    }
  }

  removeExercise(exercise: string) {
    const index = this.exerciseList.indexOf(exercise);
    if (index > -1) {
      this.exerciseList.splice(index, 1);
    }
  }
}
