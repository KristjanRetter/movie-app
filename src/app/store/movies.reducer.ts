import { createReducer, on } from '@ngrx/store';

import * as MovieActions from './movie.actions';
import { Movie } from './movie.model';

export interface State {
    movies: Movie[];
    searchKey: string;
}

const initialState: State = {
    movies: [],
    searchKey: ''
};

const moviesReducer = createReducer(
    initialState,
    on(MovieActions.GetMoviesSuccess, (state, { payload }) => ({ ...state, movies: payload })),
    on(MovieActions.SetSearchWord, (state, { payload }) => ({ ...state, searchKey: payload }))
);

export const reducerMovies = (state, action): State => {
    return moviesReducer(state, action);
};
