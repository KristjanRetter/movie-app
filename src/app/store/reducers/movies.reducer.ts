import { Movie } from '../models/movie.model';
import { createAction, props, createReducer, on } from '@ngrx/store';

import * as ScoreboardPageActions from '../actions/movie.actions';
import { Action } from 'rxjs/internal/scheduler/Action';


export interface State {
    movies: Movie[];
  }

export const initialState: Movie[] = []

const scoreboardReducer = createReducer(
    initialState,
  //  on(ScoreboardPageActions.GetMovies, (state, { payload }) => ({movies: payload})),

    on(ScoreboardPageActions.GetMoviesSuccess, (state, { payload }) => ( payload))
  );

export function reducer(state, action) {
    return scoreboardReducer(state, action);
  }
