import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieDetailComponent } from './pages/movie-detail/movie-detail.component';
import { AppComponent } from './app.component';
import { MovieListComponent } from './pages/movie-list/movie-list.component';

const routes: Routes = [
  { path: 'movies/:key', component: MovieListComponent },
  { path: 'detail/:id', component: MovieDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
