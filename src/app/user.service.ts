import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from './user';
import { MyUser } from './myUser';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // private heroesUrl = 'http://127.0.0.1:8000/api/users/';
  // private heroesUrl = 'http://127.0.0.1:8000/api/candidate/';
  private userUrl = 'http://127.0.0.1:8000/api/login/';
  constructor(private http: HttpClient) { }
  /*
    addUser(user: User): Observable<User> {
      return this.http.post<User>(this.heroesUrl, user, httpOptions).pipe(
        catchError(this.handleError<User>('addUser'))
      );
    }

      addCandidate(candidate: Candidate): Observable<Candidate> {
    return this.http.post<Candidate>(this.candidateUrl, candidate, httpOptions).pipe(
      catchError(this.handleError<Candidate>('addCandidate'))
    );
  }
  logIn(muser: MyUser): Observable<MyUser> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let params = new URLSearchParams();
    params.append("email", muser.email);
    params.append("password", muser.password);

    return this.http.get<MyUser>(this.userUrl, { headers: headers, search: params }).pipe(
      catchError(this.handleError<MyUser>('userLogIn'))
    );
  }

  */
  logIn(muser: MyUser): Observable<MyUser> {
    return this.http.post<MyUser>(this.userUrl, muser, httpOptions).pipe(
      catchError(this.handleError<MyUser>('userLogIn'))
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