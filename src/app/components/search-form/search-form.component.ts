import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { SearchService } from 'src/app/services/search-service';
import { Subject } from 'rxjs';
import { takeUntil, debounceTime, filter } from 'rxjs/operators';
import { Film } from 'src/app/models/Film';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {
  searchForm: FormGroup;
  showLoader = false;
  searchResults: Film[];

  private destroySubject = new Subject();

  constructor(
    private fb: FormBuilder,
    private searchSrv: SearchService
  ) {}

  ngOnInit() {
    this.searchForm = this.fb.group({
      search: ['']
    });
    this.initFormListener();
  }

  initFormListener() {
    this.searchForm
      .get('search')
      .valueChanges.pipe(
        takeUntil(this.destroySubject),
        debounceTime(500),
      )
      .subscribe(val => {
          val.length >= 2 ? this.doSearch(val) : delete this.searchResults;
      });
  }

  doSearch(searchterm) {
    this.showLoader = true;
    this.searchSrv.getSearchResults(searchterm).subscribe(
      (data) => {
        this.searchResults = data.results;
      },
      (error) => {
        console.log(error);
      },
      () => this.showLoader = false);
  }

}
