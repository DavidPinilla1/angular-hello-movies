import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
// import { map, filter } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { MovieResponse } from '../types/movie-response.type';
type language = 'es-ES' | 'en-EN';
@Injectable({
  providedIn: 'root'
})
export class MovieService {
  API_KEY = 'cea68b520beecac6718820e4ac576c3a';
  constructor(private httpClient: HttpClient) { }

  getMovies(language: language = 'es-ES', page: string = '1'): Observable<MovieResponse> {
    // const params = new HttpParams()
    //   .set('api_key', 'cea68b520beecac6718820e4ac576c3a')
    //   .set('language', language)
    //   .set('page', page);
    const params = {
      api_key: this.API_KEY,
      language,
      page,
    };
    return this.httpClient.get<MovieResponse>('https://api.themoviedb.org/3/movie/popular', { params });
    // .toPromise().then(res => console.log(res));
    // .pipe(
    //   map(res => res['results']),

    // )
  }
}
