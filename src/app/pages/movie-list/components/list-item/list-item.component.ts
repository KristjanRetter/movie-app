import { Component, Input } from '@angular/core';
import { Movie } from 'src/app/store/movie.model';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.sass']
})

export class ListItemComponent {
  @Input() movie: Movie;
}
