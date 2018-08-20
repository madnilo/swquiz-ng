import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { People } from './people';

export interface Result{
  count: number,
  next: string,
  previous: string,
  results: People[],
}

@Injectable({
  providedIn: 'root'
})

export class PeopleService {

  constructor(
    private http: HttpClient) { }

    getPeople(): Observable<HttpResponse<Result>>{
      return this.http.get<Result>(
        'https://swapi.co/api/people', {observe: 'response'});
    }
}
