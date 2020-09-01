import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { Router, ActivatedRoute } from '@angular/router';
import { State } from 'src/app/store/movies.reducer';
import { GetMovies, SetSearchWord } from 'src/app/store/movie.actions';
import { PartialObserver, CompletionObserver, Observable } from 'rxjs';
import { Movie } from 'src/app/store/movie.model';

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
