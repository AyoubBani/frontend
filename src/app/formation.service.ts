import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, from } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
const myUser = JSON.parse(localStorage.getItem('currentUser'));
const token = (myUser == null) ? '' : myUser.token;
const httpOptionsExtra = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Token ' + token
  })
};

import { Formation } from './formation';

@Injectable({
  providedIn: 'root'
})
export class FormationService {

  private formationUrl = 'http://127.0.0.1:8000/api/formation/';
  constructor(private http: HttpClient) { }
  addFormation(formation: Formation): Observable<Formation> {
    return this.http.post<Formation>(this.formationUrl, formation, httpOptionsExtra)
      .pipe(
        catchError(this.handleError<Formation>('addFormation'))
      );
  }

  updateFormation(formation: Formation): Observable<Formation> {
    return this.http.put<Formation>(this.formationUrl + formation.id + '/', formation, httpOptionsExtra)
      .pipe(
        catchError(this.handleError<Formation>('updateFormation'))
      );
  }
  getFormations(): Observable<Formation[]> {
    console.log('GETTING Formation');
    console.log(httpOptionsExtra);
    return this.http.get<Formation[]>(this.formationUrl, httpOptionsExtra).pipe(
      tap(formations => this.log('fetched Formations')),
      catchError(this.handleError('getFormations', []))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  private log(message: string) {
    console.log(`HeroService: ${message}`);
  }
}
