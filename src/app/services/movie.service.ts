import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private httpClient: HttpClient) { }

  getMovies(): void {
    this.httpClient.get('https://api.themoviedb.org/3/tv/popular?api_key=cea68b520beecac6718820e4ac576c3a&append_to_response=credits&language=es-ES')
      .subscribe(res => console.log(res));
  }
}
