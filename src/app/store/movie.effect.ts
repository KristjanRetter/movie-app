import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { throwError } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

import { MovieService } from '../movie.service';

@Injectable()
export class MovieEffects {
    constructor(private actions$: Actions, private moviesService: MovieService) { }

    loadMovies$ = createEffect(() => this.actions$.pipe(
        ofType('[OMDb API] - get movies'),
        mergeMap(({ payload }) => this.moviesService.getMovies(payload)
            .pipe(
                map(movies => ({ type: '[OMDb API] - get movies success', payload: movies.Search })),
                catchError(err => {
                    console.log(err);
                    return throwError(err);
                })
            ))
        )
    );
}
