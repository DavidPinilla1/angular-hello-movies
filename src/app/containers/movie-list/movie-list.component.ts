import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from 'src/app/models/movie';
import { Observable } from 'rxjs';
import { MovieResponse } from 'src/app/types/movie-response.type';
@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
  // providers:[MovieService] //para crear una instancia única del servicio para este componente
})
export class MovieListComponent implements OnInit {
  // movies: Movie[];
  movies$: Observable<MovieResponse>;
  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
     this.movies$ = this.movieService.getMovies();
      // .subscribe(res => {
      //   this.movies = res.results;
      // });
  }
}