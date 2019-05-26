import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  baseUrl = 'https://swapi.co/api/films/';

  constructor(private http: HttpClient) { }

  /**
   * Service returns search results by searchterm
   * @param searchterm term of search
   */
  getSearchResults(searchterm: string): Observable<any> {
    const params = new HttpParams()
      .set('search', searchterm);

    return this.http.get<any>(this.baseUrl, {params});
  }
  /**
   * Service returns single film by id
   * @param id Film id
   */
  getFilm(id): Observable<any> {
    return this.http.get<any>(this.baseUrl + id + '/');
  }
}
