import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './pages/home/home.component';
import { FilmDetailComponent } from './pages/film/film.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';

const routes: Routes = [
  { path: '', component: HomepageComponent},
  { path: 'home', component: HomepageComponent},
  { path: 'film', redirectTo: '/', pathMatch: 'full'},
  { path: 'film/:id', component: FilmDetailComponent},
  { path: '**', component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
