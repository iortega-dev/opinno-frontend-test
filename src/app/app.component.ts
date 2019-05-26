import { Component } from '@angular/core';
import { Router, Event, NavigationEnd, ActivatedRoute } from '@angular/router';
import { HistoricalService } from './services/historical.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'OpinnoSWAPI';

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private historicalSrv: HistoricalService) {

    // Retrieves historical first time
    this.historicalSrv.getHistorical();

    this.router.events.subscribe((event: Event) => {
      // When navigation ends
      if (event instanceof NavigationEnd) {
        let routeTitle;

        /**
         *  IF movie link
         *  ELSE page link
         */
        if (this.router.getCurrentNavigation().extras.state) {
          routeTitle = this.router.getCurrentNavigation().extras.state.title;
        } else if (this.activatedRoute.snapshot.firstChild.data.title) {
          routeTitle = this.activatedRoute.snapshot.firstChild.data.title;
        }

        // Set title if defined
        if (routeTitle) {
          this.historicalSrv.addRecord(routeTitle, event.urlAfterRedirects);
        }
      }
    });
  }


}
