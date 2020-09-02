import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MovieListComponent } from './movie-list.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MovieService } from 'src/app/movie.service';
import { MovieServiceMock } from 'src/app/movie.service.mock';
import { StoreModule } from '@ngrx/store';

describe('MovieListComponent', () => {
  let component: MovieListComponent;
  let fixture: ComponentFixture<MovieListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MovieListComponent],
      imports: [RouterTestingModule, StoreModule.forRoot({})],
      providers: [{ provide: MovieService, useValue: MovieServiceMock }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
