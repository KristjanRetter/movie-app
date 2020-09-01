import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/app.service';
import { Store, select } from '@ngrx/store';
import { State } from '../../store/movies.reducer';
import { GetMovies, SetSearchWord } from 'src/app/store/movie.actions';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/store/movie.model';
import {trigger, style, animate, transition} from '@angular/animations';

@Component({
    selector: 'app-movie-list',
    templateUrl: './movie-list.component.html',
    styleUrls: ['./movie-list.component.sass'],
    animations: [
      trigger('fade', [
        transition('void => *', [
          style({ opacity: 0 }),
          animate(1000, style({opacity: 1}))
        ])
      ])
    ]
})

export class MovieListComponent implements OnInit {
    constructor( public route: ActivatedRoute,  public movieService: MovieService, private store: Store<State>){}

    key: string;
    movies: Movie[];

    ngOnInit(): void {
        this.store.pipe(select('movies')).subscribe((response: any) => this.movies = response.movies);
        console.log(this.movies );
        this.key = this.route.snapshot.paramMap.get('key');
        this.store.dispatch(SetSearchWord({ payload: this.key }));

        this.store.dispatch(GetMovies({ payload: this.key }));
    }
}
