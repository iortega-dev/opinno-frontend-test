import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/home/home.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchResultItemComponent } from './components/search-result-item/search-result-item.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CarouselItemComponent } from './components/carousel-item/carousel-item.component';
import { FilmDetailComponent } from './pages/film/film.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { RecordsListComponent } from './components/records-list/records-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    SearchInputComponent,
    SearchFormComponent,
    SearchResultItemComponent,
    CarouselComponent,
    CarouselItemComponent,
    FilmDetailComponent,
    PagenotfoundComponent,
    RecordsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
