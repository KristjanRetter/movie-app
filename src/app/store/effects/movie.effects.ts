import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { AppService } from '../../app.service';

@Injectable()
export class MovieEffects {
    constructor(private actions$: Actions, private moviesService: AppService) { }
    loadMovies$ = createEffect(() => this.actions$.pipe(
        ofType('[OMDb API] - get movies'),
        mergeMap(({payload}) => this.moviesService.getMoviesTest(payload)
            .pipe(
                map(movies => ({ type: '[OMDb API] - get movies success', payload: movies.Search })),
                catchError(() => EMPTY)
            ))
    )
    );


}