import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';

import { GetMovies, SetSearchWord } from 'src/app/store/movie.actions';
import { State } from 'src/app/store/movies.reducer';
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
    searchWord: string;
    movies: Movie[];
    error = false;
    isSubmitted = false;

    ngOnInit(): void {
        this.getMovies();
    }

    getMovies(): void {
        this.store.pipe(select('movies')).subscribe((response: any) => {
            if(response) {
                this.searchWord = response.searchWord;
                this.movies = response.movies;
                this.error = !this.searchWord || !this.movies;
            }
        
        });
    }

    onSubmit(): void {
        this.store.dispatch(GetMovies({ payload: this.searchForm.value.name }));
        this.store.dispatch(SetSearchWord({ payload: this.searchForm.value.name }));
        this.isSubmitted = true;
        this.getMovies();
        if (this.searchWord) {
            this.router.navigate([`movies/${this.searchForm.value.name}`]);
        }
    }
}
