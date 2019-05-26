import { Component, OnInit, OnDestroy } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';
import { ActivatedRoute } from '@angular/router';
import { Film } from 'src/app/models/Film';
import { Observable, Subscription } from 'rxjs';
import { Specie } from 'src/app/models/Specie';
import { SpeciesService } from 'src/app/services/species.service';
import { PlanetsService } from 'src/app/services/planet.service';

@Component({
  selector: 'app-film-detail',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmDetailComponent implements OnInit, OnDestroy {

  id: number;
  film: Film;
  sub: Subscription;
  title = '—————';
  dataLoaded = false;

  speciesArray: string[] = [];
  planetsArray: string[] = [];

  constructor(private searchSrv: SearchService,
              private speciesSrv: SpeciesService,
              private planetsSrv: PlanetsService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params.id;
      this.loadFilmData(this.id);
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  loadFilmData(id) {
    // If not a number or undefined
    if (isNaN(id) || !id) {
      this.title = 'Movie not found';
    } else {
      this.searchSrv.getFilm(id).subscribe(
        (data) => {
          this.film = data;
          this.title = this.film.title;
          this.film.species.forEach(s => {
            this.getSpecie(s);
          });
          this.film.planets.forEach(p => {
            this.getPlanet(p);
          });
          this.dataLoaded = true;
        },
        (error) => console.log('Error retieving film', error)
      );
    }
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

  /**
   * Get planet from character
   * @param url Query URL
   */
  getPlanet(url) {
    this.planetsSrv.getPlanet(url).subscribe(
      (p) => { this.planetsArray.push(p.name); },
      (e) => console.log('Error retrieving planet', e)
    );
  }


}
