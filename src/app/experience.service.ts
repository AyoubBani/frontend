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

import { Experience } from './experience';
@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  private experienceUrl = 'http://127.0.0.1:8000/api/experience/';
  constructor(private http: HttpClient) { }
  addExperience(experience: Experience): Observable<Experience> {
    return this.http.post<Experience>(this.experienceUrl, experience, httpOptionsExtra)
      .pipe(
        catchError(this.handleError<Experience>('addExperience'))
      );
  }

  updateExperience(experience: Experience): Observable<Experience> {
    return this.http.put<Experience>(this.experienceUrl + experience.id + '/', experience, httpOptionsExtra)
      .pipe(
        catchError(this.handleError<Experience>('updateExperience'))
      );
  }
  getExperiences(): Observable<Experience[]> {
    console.log('GETTING Experience');
    console.log(httpOptionsExtra);
    return this.http.get<Experience[]>(this.experienceUrl, httpOptionsExtra).pipe(
      tap(experiences => this.log('fetched Countries')),
      catchError(this.handleError('getExperiences', []))
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
