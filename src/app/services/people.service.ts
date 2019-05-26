import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  baseUrl = 'https://swapi.co/api/people/';

  constructor(private http: HttpClient) { }

  /**
   * Service returns People collection by page
   * @param page Query page to show
   */
  getPeopleResults(page: number): Observable<any> {
    const params = new HttpParams()
      .set('page', page.toString());

    return this.http.get<any>(this.baseUrl, {params});
  }
}
