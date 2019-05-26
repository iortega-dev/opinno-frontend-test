import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { SearchService } from 'src/app/services/search.service';
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

  // Initializes form group and form listener
  ngOnInit() {
    this.searchForm = this.fb.group({
      search: ['']
    });
    this.initFormListener();
  }

  /**
   * Subscribe to search FormControl changes, with debounce time for seach when >= 2 characters typed
   */
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

  /**
   * Launch seach query, meanwhile shows load spinner and turn it off when ends
   * @param searchterm Term of search
   */
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
