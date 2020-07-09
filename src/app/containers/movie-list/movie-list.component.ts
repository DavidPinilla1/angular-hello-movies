import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
  // providers:[MovieService] //para crear una instancia única del servicio para este componente
})
export class MovieListComponent implements OnInit {
  title: string;
  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.getMovies();
    console.log('Movie-list ngOnInit');
  }
}