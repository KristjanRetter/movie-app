import { Component, OnInit } from '@angular/core';
import {AppService, Movie} from './app.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { GetMovies } from './store/actions/movie.actions';
import { Store } from '@ngrx/store';
import {State} from './store/reducers/movies.reducer'
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  constructor(   private router: Router,  private formBuilder: FormBuilder, private store: Store<State>){
 
  }
  searchForm = new FormGroup({
    name: new FormControl(''),

  });

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.searchForm.value.name);
    this.store.dispatch(GetMovies({payload: this.searchForm.value.name}));
    this.router.navigate(['']);
  }


 
}
