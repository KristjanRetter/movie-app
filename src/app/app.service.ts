import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Movie {
    Poster: string;
    Title: string;
    Type: string;
    Year: string;
    imdbID: string;
}

@Injectable()
export class AppService {
  constructor(private http: HttpClient) { }

  getMovies(): Observable<any> {
    return this.http.get<any>(`http://www.omdbapi.com/?apikey=f79aeba3&s=war&page=2`, {});
  }

  getMoviesTest(keyword: string ): Observable<any> {
    return this.http.get<any>(`http://www.omdbapi.com/?apikey=f79aeba3&s=${keyword}`, {});
  }

  getMovieDetail(id: string): Observable<any> {
    return this.http.get<any>(`http://www.omdbapi.com/?apikey=f79aeba3&plot=full&i=${id}`, {});
  }
}
