import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class MovieService {
  private movieList: { title: string; director: string }[] = [
    { title: 'Inception', director: 'Christopher Nolan' },
    { title: 'Pulp Fiction', director: 'Quentin Tarantino' },
    { title: 'The Dark Knight', director: 'Christopher Nolan' },
  ];

  getMovies() {
    return this.movieList;
  }

  addMovie(movie: { title: string; director: string }) {
    this.movieList.push(movie);
  }

  removeMovie(movie: { title: string; director: string }) {
    const index = this.movieList.indexOf(movie);
    if (index > -1) {
      this.movieList.splice(index, 1);
    }
  }

  clearAllMovies() {
    this.movieList = [];
  }
}
