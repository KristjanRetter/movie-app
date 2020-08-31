import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/app/app.service';
import { fadeInAnimation } from 'src/app/animations/animation';

@Component({
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' },
  selector: 'app-movie-list-item',
  templateUrl: './movie-list-item.component.html',
  styleUrls: ['./movie-list-item.component.sass']
})
export class MovieListItemComponent implements OnInit {

  constructor() { }
  @Input() movie: Movie;

  ngOnInit(): void {
  }

}
