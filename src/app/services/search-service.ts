import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  baseUrl = 'https://swapi.co/api/films';

  constructor(private http: HttpClient) { }

  getSearchResults(searchterm: string): Observable<any> {
    const params = new HttpParams()
      .set('search', searchterm);

    return this.http.get<any>(this.baseUrl, {params});
  }
}
