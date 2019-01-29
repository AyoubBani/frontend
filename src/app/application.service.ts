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
import {Application} from './application';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {


  private applicationUrl = 'http://127.0.0.1:8000/api/application/';

  constructor(private http: HttpClient) { }

  addApplication(application: Application): Observable<Application> {
    console.log('sending new Application: ');
    console.log(JSON.stringify(application));
    return this.http.post<Application>(this.applicationUrl, application, httpOptionsExtra)
      .pipe(
        catchError(this.handleError<Application>('addApplication'))
      );
  }

  getApplications(): Observable<Application[]> {
    return this.http.get<Application[]>(this.applicationUrl, httpOptionsExtra).pipe(
      tap(applications => this.log('fetched Applications')),
      catchError(this.handleError('getApplications', []))
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
