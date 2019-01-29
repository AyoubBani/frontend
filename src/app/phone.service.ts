import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
// const myUser = JSON.parse(localStorage.getItem('currentUser'));
// const httpOptions = {
//   headers: new HttpHeaders({
//     'Content-Type': 'application/json',
//     'Authorization': 'Token ' + myUser.token
//   })
// };

const myUser = JSON.parse(localStorage.getItem('currentUser'));
const token = (myUser == null) ? '' : myUser.token;
const httpOptionsExtra = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Token ' + token
  })
};
import { Phone } from './phone';
@Injectable({
  providedIn: 'root'
})
export class PhoneService {
  private phoneUrl = 'http://127.0.0.1:8000/api/phone/';
  constructor(private http: HttpClient) { }

  addPhone(phone: Phone): Observable<Phone> {
    return this.http.post<Phone>(this.phoneUrl, phone, httpOptionsExtra)
      .pipe(
        // tap((hero: Phone) => this.log(`added hero w/ id=${phone.id}`)),
        catchError(this.handleError<Phone>('addPhone'))
      );
  }

  updatePhone(phone: Phone): Observable<Phone> {
    return this.http.put<Phone>(this.phoneUrl + phone.id + '/', phone, httpOptionsExtra)
      .pipe(
        // tap((hero: Phone) => this.log(`added hero w/ id=${phone.id}`)),
        catchError(this.handleError<Phone>('addPhone'))
      );
  }


  getPhones(): Observable<Phone[]> {
    console.log('GETTING PHONE');
    console.log(httpOptionsExtra.headers.get('Authorization'));
    return this.http.get<Phone[]>(this.phoneUrl, httpOptionsExtra).pipe(
      tap(phones => this.log('fetched Countries')),
      catchError(this.handleError('getPhones', []))
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
