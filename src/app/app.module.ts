import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/home/home.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchResultItemComponent } from './components/search-result-item/search-result-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    SearchInputComponent,
    SearchFormComponent,
    SearchResultItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
