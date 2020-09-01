import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/app.service';
import { Movie } from 'src/app/store/movie.model';

@Component({
    selector: 'app-movie-detail',
    templateUrl: './movie-detail.component.html',
    styleUrls: ['./movie-detail.component.sass'],
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
