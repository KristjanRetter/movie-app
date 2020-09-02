import { createReducer, on } from '@ngrx/store';

import * as MovieActions from './movie.actions';
import { Movie } from './movie.model';

export interface State {
    movies: Movie[];
    searchWord: string;
}

const initialState: State = {
    movies: [],
    searchWord: ''
};

const moviesReducer = createReducer(
    initialState,
    on(MovieActions.GetMoviesSuccess, (state, { payload }) => ({ ...state, movies: payload })),
    on(MovieActions.SetSearchWord, (state, { payload }) => ({ ...state, searchWord: payload }))
);

export const reducerMovies = (state, action): State => {
    return moviesReducer(state, action);
};
