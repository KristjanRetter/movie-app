import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';

import { MovieService } from 'src/app/movie.service';
import { GetMovies, SetSearchWord } from 'src/app/store/movie.actions';
import { Movie } from 'src/app/store/movie.model';
import { State } from '../../store/movies.reducer';

@Component({
    selector: 'app-movie-list',
    templateUrl: './movie-list.component.html',
    styleUrls: ['./movie-list.component.sass'],
    animations: [
      trigger('fade', [
        transition('void => *', [
          style({ opacity: 0 }),
          animate(500, style({opacity: 1}))
        ])
      ])
    ]
})

export class MovieListComponent implements OnInit {
    constructor( public route: ActivatedRoute,  public movieService: MovieService, private store: Store<State>){}

    searchWord: string;
    movies: Movie[];

    ngOnInit(): void {
        this.store.pipe(select('movies')).subscribe((response: any) => this.movies = response.movies);
        this.searchWord = this.route.snapshot.paramMap.get('searchWord');
        this.store.dispatch(SetSearchWord({ payload: this.searchWord }));
        this.store.dispatch(GetMovies({ payload: this.searchWord }));
    }
}
