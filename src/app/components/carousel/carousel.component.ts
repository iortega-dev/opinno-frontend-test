import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Film } from 'src/app/models/Film';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {

  @Input() characters: Film[];
  @Input() amount: number;
  @Input() loading: boolean;
  @Output() outputCounter: EventEmitter<number> = new EventEmitter<number>();
  counter = 0;

  constructor() { }

  /**
   * Navigate function for carousel
   * @param direction -1 for previous, 1 for next
   */
  navigate(direction) {
    // calculate th new position
    this.counter = this.counter + direction;

    // If the first item and previous, go to the last item
    if (direction === -1 && this.counter < 0) {
      this.counter = this.characters.length - 1;
    }

    // If the last item and next, go to the first item
    if (direction === 1 && this.counter === this.characters.length) {
      this.counter = 0;
    }
    // Output counter position to parent
    this.outputCounter.emit(this.counter);
  }

}
