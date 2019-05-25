import { Component, OnInit } from '@angular/core';
import { PeopleService } from 'src/app/services/people.service';
import { People } from 'src/app/models/People';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomepageComponent implements OnInit {

  // Control for items loaded
  itemsLoaded = false;
  loading = true;
  // Information about carousel
  total = 0;
  counter = 0;
  characters: People[];
  nextUrl: string;
  previousUrl: string;
  count: number;

  constructor(private peopleSrv: PeopleService) { }

  ngOnInit() {
    this.loadPeople().subscribe(
      () => { this.itemsLoaded = true; },
      () => { console.log('Error loading people'); }
    );
  }

  /**
   * Updates the counter at this view and adds more items when reaches the last-item
   * @param counter current position received from carousel component
   */
  updateCounter(counter) {
    this.counter = counter;
    if (this.nextUrl && counter === this.characters.length - 1) {
      this.loading = true;
      const nextPage = this.nextUrl.split('page=');
      this.loadPeople(+nextPage[1]).subscribe(null, () => console.log('Error loading people'));
    }
  }

  /**
   * Loads people array calling People Service
   * @param page (default= 1) Page to load results
   */
  loadPeople(page = 1) {
    return this.peopleSrv.getPeopleResults(page)
    .pipe(
      map(
        (data) => {
          page > 1 ? this.characters = this.characters.concat(data.results) : this.characters = data.results;
          this.nextUrl = data.next;
          this.previousUrl = data.previous;
          this.count = data.count;
          this.loading = false;
        }
      )
    );
  }
}
