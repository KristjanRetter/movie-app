import { Component, OnInit } from '@angular/core';
import { Movie, AppService } from 'src/app/app.service';
import { Store, select } from '@ngrx/store';
import { State } from '../../store/reducers/movies.reducer'
import { GetMovies } from 'src/app/store/actions/movie.actions';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.sass']
})
export class MovieListComponent implements OnInit {

  constructor( public appService: AppService, private store: Store<State>){}
  title = 'movie-app';
  movies: Movie[];

  ngOnInit(): void {
    this.store.dispatch(GetMovies({payload: 'Light'}));
    this.store.pipe(select('movies')).subscribe(data =>  this.movies = data)
    console.log(this.movies)
  }

}
