import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {

  constructor(private http: HttpClient) { }

  /**
   * Service returns single planet
   * @param url URL to make the query
   */
  getPlanet(url: string): Observable<any> {
    return this.http.get<any>(url);
  }

}
