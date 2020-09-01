import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MovieService } from 'src/app/movie.service';
import { Movie } from 'src/app/store/movie.model';


@Component({
    selector: 'app-movie-detail',
    templateUrl: './movie-detail.component.html',
    styleUrls: ['./movie-detail.component.sass'],
    animations: [
      trigger('fade', [
        transition('void => *', [
          style({ opacity: 0 }),
          animate(300, style({opacity: 1}))
        ])
      ])
    ]
})

export class MovieDetailComponent implements OnInit {
    constructor(private route: ActivatedRoute, public movieService: MovieService) {}

    movieDetail: Movie;

    ngOnInit(): void {
        const id = this.route.snapshot.paramMap.get('id');
        this.movieService
            .getMovieDetail(id)
            .subscribe((response) => (this.movieDetail = response));
    }
}
