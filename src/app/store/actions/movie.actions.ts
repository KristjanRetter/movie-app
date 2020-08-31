import { Movie } from '../models/movie.model';
import { createAction, props } from '@ngrx/store';

export const GetMovies = createAction(
    '[OMDb API] - get movies',
    props<{ payload: string }>()
);

export const GetMoviesSuccess = createAction(
    '[OMDb API] - get movies success',
    props<{ payload: Movie[] }>()
);
