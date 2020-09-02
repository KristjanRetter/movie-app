import { createAction, props } from '@ngrx/store';

import { Movie } from './movie.model';

export const GetMovies = createAction(
    '[OMDb API] - get movies',
    props<{ payload: string }>()
);

export const GetMoviesSuccess = createAction(
    '[OMDb API] - get movies success',
    props<{ payload: Movie[] }>()
);

export const SetSearchWord = createAction(
    '[SEARCH] - set search word',
    props<{ payload: string }>()
);
