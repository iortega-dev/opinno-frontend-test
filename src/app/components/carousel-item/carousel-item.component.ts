import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { People } from 'src/app/models/People';
import { PlanetsService } from 'src/app/services/planet.service';
import { SpeciesService } from 'src/app/services/species.service';
import { Planet } from 'src/app/models/Planet';
import { Specie } from 'src/app/models/Specie';

@Component({
  selector: 'app-carousel-item',
  templateUrl: './carousel-item.component.html',
  styleUrls: ['./carousel-item.component.scss']
})
export class CarouselItemComponent implements OnInit, AfterViewInit {

  @Input() item: People;
  planet: Planet;
  specie: Specie;
  speciesArray: string[] = [];

  componentLoaded = false;

  constructor(private planetsSrv: PlanetsService, private speciesSrv: SpeciesService) { }

  // Get the planet and species from character
  ngOnInit() {
    this.getPlanet(this.item.homeworld);
    this.item.species.forEach(s => {
      this.getSpecie(s);
    });
  }

  ngAfterViewInit() {
    this.componentLoaded = true;
  }

  /**
   * Get planet from character
   * @param url Query URL
   */
  getPlanet(url) {
    this.planetsSrv.getPlanet(url).subscribe(
      (p) => { this.planet = p; },
      (e) => console.log('Error retrieving planet', e)
    );
  }

  /**
   * Get specie from character
   * @param url Query URL
   */
  getSpecie(url) {
    this.speciesSrv.getSpecie(url).subscribe(
      (sp) => { this.speciesArray.push(sp.name); },
      (e) => console.log('Error retrieving specie', e)
    );
  }


}
