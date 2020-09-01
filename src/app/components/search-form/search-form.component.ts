import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';

import { GetMovies, SetSearchWord } from 'src/app/store/movie.actions';
import { State } from 'src/app/store/movies.reducer';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.sass']
})
export class SearchFormComponent implements OnInit {

  constructor(private router: Router, private store: Store<State>) {}

  searchForm = new FormGroup({
    name: new FormControl(''),
  });
  name: string;

  ngOnInit(): void {
    this.store.pipe(select('movies')).subscribe((response: any) => this.name = response.searchKey);
  }

  onSubmit(): void {
    this.store.dispatch(GetMovies({ payload: this.searchForm.value.name }));
    this.store.dispatch(SetSearchWord({ payload: this.searchForm.value.name }));
    this.router.navigate([`movies/${this.searchForm.value.name}`]);
  }
}
