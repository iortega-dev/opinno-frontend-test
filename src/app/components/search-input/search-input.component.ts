import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { Film } from 'src/app/models/Film';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SearchInputComponent),
      multi: true
    }
  ]
})
export class SearchInputComponent implements OnInit, ControlValueAccessor {
  @Input() formControlName: string;
  @Input() label: string;
  @Input() placeholder: string;
  @Input() loading = false;
  @Input() results: Film[];

  value: string;
  focused: boolean;
  isDisabled: boolean;
  onChange = (_: any) => {};
  onTouch = () => {};

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onBlur() {
    this.focused = false;
  }

  onFocus() {
    this.focused = true;
  }

  onInput(value: string) {
    this.value = value;
    this.onTouch();
    this.onChange(this.value);
  }

  writeValue(value: any): void {
    if (value) {
      this.value = value || '';
    } else {
      this.value = '';
    }
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  gotoFilmDetails(film: Film) {
    this.router.navigate(['/film', this.getFilmId(film)]).then(
      null,
      (error) => console.log('Error redirect film', error)
    );
  }

  /**
   * Returns the id of the movie from the URL property
   * @param el Film element
   */
  getFilmId(el: Film) {
    const filmUrl = el.url.split('/films/');
    return filmUrl[1].slice(0, -1);
  }
}
