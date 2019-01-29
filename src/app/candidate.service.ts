import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Candidate } from './candidate'
// import { Candidate } from './usertest'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
// const HttpUploadOptions = {
//   headers: new HttpHeaders({ "Content-Type": "multipart/form-data" })
// }
const myUser = JSON.parse(localStorage.getItem('currentUser'));
const token = (myUser == null) ? '' : myUser.token;
const httpOptionsExtra = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Token ' + token
  })
};

@Injectable({
  providedIn: 'root'
})
export class CandidateService {
  private candidateUrl = 'http://127.0.0.1:8000/api/candidate/';
  constructor(private http: HttpClient) { }

  addCandidate(candidate: Candidate): Observable<Candidate> {
    let input = new FormData();
    // Add your values in here
    // console.log(candidate.user.profile_image);
    input.append('file', candidate.user.profile_image);
    input.append('email', candidate.user.email);
    input.append('first_name', candidate.user.first_name);
    input.append('last_name', candidate.user.last_name);
    input.append('password', candidate.user.password);
    input.append('ville', '' + candidate.user.ville.id);
    input.append('metier', candidate.metier.metier.metier);
    input.append('experience', candidate.metier.experience);
    // input.append('metier', candidate.metier.metier);

    // etc, etc

    return this.http.post<Candidate>(this.candidateUrl, input).pipe(
      catchError(this.handleError<Candidate>('addCandidate'))
    );
  }
  updateCandidate(candidate: Candidate): Observable<any> {
    return this.http.put(this.candidateUrl + candidate.user.id + '/', candidate, httpOptionsExtra).pipe(
      tap(_ => console.log(`updated candidate id=${candidate.user.id}`)),
      catchError(this.handleError<any>('updateCandidate'))
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
}
