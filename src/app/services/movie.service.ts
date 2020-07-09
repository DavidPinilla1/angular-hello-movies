import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { map, filter } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { MovieResponse } from '../types/movie-response.type';
@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private httpClient: HttpClient) { }

  getMovies(): Observable<MovieResponse> {
    return this.httpClient.get<MovieResponse>('https://api.themoviedb.org/3/movie/popular?api_key=cea68b520beecac6718820e4ac576c3a&append_to_response=credits&language=es-ES');
    // .toPromise().then(res => console.log(res));
    // .pipe(
    //   map(res => res['results']),

    // )
  }
}
