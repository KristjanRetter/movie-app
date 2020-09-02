import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MovieResponse, MovieDetailResponse } from './store/movie.model';

@Injectable()
export class MovieService {
  constructor(private http: HttpClient) {}

  getMovies(searchWord: string): Observable<MovieResponse> {
    return this.http.get<MovieResponse>(`http://www.omdbapi.com/?apikey=f79aeba3&s=${searchWord}`, {});
  }

  getMovieDetail(id: string): Observable<MovieDetailResponse> {
    return this.http.get<MovieDetailResponse>(`http://www.omdbapi.com/?apikey=f79aeba3&plot=full&i=${id}`, {});
  }
}
