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
import { Offre } from './offre';

@Injectable({
  providedIn: 'root'
})
export class OffreService {
  private offreUrl = 'http://127.0.0.1:8000/api/offre/';

  constructor(private http: HttpClient) { }

  addOffre(offre: Offre): Observable<Offre> {
    console.log('sending new Offre: ');
    console.log(JSON.stringify(offre));
    return this.http.post<Offre>(this.offreUrl, offre, httpOptionsExtra)
      .pipe(
        catchError(this.handleError<Offre>('addOffre'))
      );
  }

  getOffres(): Observable<Offre[]> {
    return this.http.get<Offre[]>(this.offreUrl, httpOptionsExtra).pipe(
      tap(offres => this.log('fetched Offres')),
      catchError(this.handleError('getOffres', []))
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
