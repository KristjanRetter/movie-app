import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { StoreModule } from '@ngrx/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieService } from './app.service';
import { ListItemComponent } from './pages/movie-list/components/list-item/list-item.component';
import { MovieDetailComponent } from './pages/movie-detail/movie-detail.component';
import { MovieListComponent } from './pages/movie-list/movie-list.component';
import { MovieEffects } from './store/movie.effect';
import { reducerMovies } from './store/movies.reducer';
import { SearchFormComponent } from './components/search-form/search-form.component';

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
