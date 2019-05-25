import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpeciesService {

  constructor(private http: HttpClient) { }

  getSpecie(url: string): Observable<any> {
    return this.http.get<any>(url);
  }

}
