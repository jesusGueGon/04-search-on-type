import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of, tap } from 'rxjs';
import { Universidad } from '../interfaces/universidad';

@Injectable({
  providedIn: 'root'
})
export class UniversidadService {

  private baseUrl: string = 'http://universities.hipolabs.com/search';

  constructor(private httpClient: HttpClient) { }

  searchBySpain(term: string): Observable<Universidad[]> {

    const url = `${this.baseUrl}?name=${term}&country=spain`;

    return this.httpClient.get<Universidad[]>(url);

  }

  searchByUnitedKingdom(term: string): Observable<Universidad[]> {

    const url = `${this.baseUrl}?name=${term}&country=united kingdom`;

    return this.httpClient.get<Universidad[]>(url);

  }

  searchByPortugal(term: string): Observable<Universidad[]> {

    const url = `${this.baseUrl}?name=${term}&country=portugal`;

    return this.httpClient.get<Universidad[]>(url);

  }

}
