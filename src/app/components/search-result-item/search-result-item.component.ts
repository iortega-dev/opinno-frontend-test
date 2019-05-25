import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Film } from 'src/app/models/Film';

@Component({
  selector: 'app-search-result-item',
  templateUrl: './search-result-item.component.html',
  styleUrls: ['./search-result-item.component.scss']
})
export class SearchResultItemComponent implements OnInit {

  isValid: boolean;
  @Input() item: Film;

  @HostBinding('class.valid')
  public get isValidResult(): boolean {
    return !!(this.item);
  }

  constructor() { }

  ngOnInit() {
  }

}
