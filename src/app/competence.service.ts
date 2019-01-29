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
import { Competence } from './competence';

@Injectable({
  providedIn: 'root'
})
export class CompetenceService {
  private competenceUrl = 'http://127.0.0.1:8000/api/competence/';

  constructor(private http: HttpClient) { }

  addCompetence(competence: Competence): Observable<Competence> {
    console.log('Competence SERVICE NEW COMPETENCE ...');
    return this.http.post<Competence>(this.competenceUrl, competence, httpOptionsExtra)
      .pipe(
        catchError(this.handleError<Competence>('addCompetence'))
      );
  }

  updateCompetence(competence: Competence): Observable<Competence> {
    return this.http.put<Competence>(this.competenceUrl + competence.id + '/', competence, httpOptionsExtra)
      .pipe(
        catchError(this.handleError<Competence>('updateCompetence'))
      );
  }

  getCompetences(): Observable<Competence[]> {
    // console.log('GETTING Competence');
    // console.log(httpOptionsExtra.headers.get('Authorization'));
    return this.http.get<Competence[]>(this.competenceUrl, httpOptionsExtra).pipe(
      tap(competences => this.log('fetched Competences')),
      catchError(this.handleError('getCompetences', []))
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