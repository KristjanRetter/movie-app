import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MovieResponse, MovieDetailResponse } from './store/movie.model';

@Injectable()
export class MovieServiceMock {
  getMovies(searchWord: string): Observable<MovieResponse> {
    return of({
      Search: [
        {
          Poster: 'string',
          Title: 'string',
          Type: 'string',
          Year: 'string',
          imdbID: 'string',
        },
      ],
      totalResults: 1,
      Response: true,
    });
  }

  getMovieDetail(id: string): Observable<MovieDetailResponse> {
    return of({
      Title: 'string',
      Year: 'string',
      Rated: 'string',
      Released: 'string',
      Runtime: 'string',
      Genre: 'string',
      Director: 'string',
      Writer: 'string',
      Actors: 'string',
      Plot: 'string',
      Language: 'string',
      Country: 'string',
      Awards: 'string',
      Poster: 'string',
      Ratings: [
        {
          Source: 'string',
          Value: 'string',
        },
        {
          Source: 'string',
          Value: 'string',
        },
        {
          Source: 'string',
          Value: 'string',
        },
      ],
      Metascore: 10,
      imdbRating: 10,
      imdbVotes: 'string',
      imdbID: 'string',
      Type: 'string',
      DVD: 'string',
      BoxOffice: 'string',
      Production: 'string',
      Website: 'string',
      Response: true,
    });
  }
}
