import { Component } from '@angular/core';
import {MovieService} from "../../services/movie-list.service";

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent {
  movieTitle: string = '';
  directorName: string = '';
  searchTerm: string = '';
  movieList: { title: string; director: string }[] = [];
  filteredMovieList: { title: string; director: string }[] = [];

  constructor(private movieService: MovieService) {
    this.movieList = this.movieService.getMovies();
    this.filteredMovieList = [...this.movieList];
  }

  addMovie() {
    if (this.movieTitle.trim() && this.directorName.trim()) {
      const newMovie = {
        title: this.movieTitle.trim(),
        director: this.directorName.trim(),
      };
      this.movieService.addMovie(newMovie);
      this.updateMovieLists();
      this.movieTitle = '';
      this.directorName = '';
    } else {
      console.log('Please fill out all fields.');
    }
  }

  removeMovie(movie: { title: string; director: string }) {
    this.movieService.removeMovie(movie);
    this.updateMovieLists();
  }

  clearAll() {
    this.movieService.clearAllMovies();
    this.updateMovieLists();
  }

  searchMovies() {
    const searchLower = this.searchTerm.toLowerCase();
    this.filteredMovieList = this.movieList.filter(movie =>
      movie.title.toLowerCase().includes(searchLower) ||
      movie.director.toLowerCase().includes(searchLower)
    );
  }

  updateMovieLists() {
    this.movieList = this.movieService.getMovies();
    this.searchMovies();  //
  }
}
