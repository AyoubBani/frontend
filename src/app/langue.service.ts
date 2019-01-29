import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
const myUser = JSON.parse(localStorage.getItem('currentUser'));
const token = (myUser == null) ? '' : myUser.token;
const httpOptionsExtra = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Token ' + token
  })
};
import { Langue } from './langue';

@Injectable({
  providedIn: 'root'
})
export class LangueService {
  private langueUrl = 'http://127.0.0.1:8000/api/langue/';

  constructor(private http: HttpClient) { }

  addLangue(langue: Langue): Observable<Langue> {
    return this.http.post<Langue>(this.langueUrl, langue, httpOptionsExtra)
      .pipe(catchError(this.handleError<Langue>('addLangue')));
  }

  updateLangue(langue: Langue): Observable<Langue> {
    return this.http.put<Langue>(this.langueUrl + langue.id + '/', langue, httpOptionsExtra)
      .pipe(
        catchError(this.handleError<Langue>('updateLangue'))
      );
  }

  getLangues(): Observable<Langue[]> {
    return this.http.get<Langue[]>(this.langueUrl, httpOptionsExtra).pipe(
      tap(langues => this.log('fetched Langues')),
      catchError(this.handleError('getLangues', []))
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