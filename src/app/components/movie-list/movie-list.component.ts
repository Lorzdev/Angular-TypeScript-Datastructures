import { Component } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent {
  movieTitle: string = '';
  directorName: string = '';

  movieList: { title: string; director: string }[] = [
    { title: 'Inception', director: 'Christopher Nolan' },
    { title: 'The Godfather', director: 'Francis Ford Coppola' },
    { title: 'Pulp Fiction', director: 'Quentin Tarantino' },
    { title: 'The Dark Knight', director: 'Christopher Nolan' },
  ];

  addMovie() {
    if (this.movieTitle.trim() && this.directorName.trim()) {
      const newMovie = {
        title: this.movieTitle.trim(),
        director: this.directorName.trim()
      };
      this.movieList.push(newMovie);
      this.movieTitle = '';
      this.directorName = '';
    } else {
      console.log('Please fill out all fields.');
    }
  }

  removeMovie(movie: { title: string; director: string }) {
    const index = this.movieList.indexOf(movie);
    if (index > -1) {
      this.movieList.splice(index, 1);
    }
  }
}
