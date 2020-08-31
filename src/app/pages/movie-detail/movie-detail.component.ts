import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.sass']
})
export class MovieDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, public appService: AppService) { }
  movieDetail: any;
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.appService.getMovieDetail(id).subscribe(response => this.movieDetail = response);


  }

}
