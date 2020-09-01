import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { MovieService } from './movie.service';
import { MovieDetailComponent } from './pages/movie-detail/movie-detail.component';
import { ListItemComponent } from './pages/movie-list/components/list-item/list-item.component';
import { MovieListComponent } from './pages/movie-list/movie-list.component';
import { MovieEffects } from './store/movie.effect';
import { reducerMovies } from './store/movies.reducer';

@NgModule({
  declarations: [
    AppComponent,
    ListItemComponent,
    MovieDetailComponent,
    MovieListComponent,
    SearchFormComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    EffectsModule.forRoot([MovieEffects]),
    StoreModule.forRoot({ movies: reducerMovies}),
    BrowserAnimationsModule,
  ],
  providers: [
    MovieService,
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
