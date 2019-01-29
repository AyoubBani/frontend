import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Company } from './company';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private companyUrl = 'http://127.0.0.1:8000/api/company/';

  constructor(private http: HttpClient) { }

  addCompany(company: Company): Observable<Company> {
    let input = new FormData();
    // Add your values in here
    // console.log(candidate.user.profile_image);
    input.append('file', company.user.profile_image);
    input.append('email', company.user.email);
    input.append('first_name', company.user.first_name);
    input.append('last_name', company.user.last_name);
    input.append('password', company.user.password);
    input.append('ville', '' + company.user.ville.id);
    input.append('company_name', company.company_name);
    // input.append('description', company.description);
    input.append('website', company.website);
    // etc, etc

    return this.http.post<Company>(this.companyUrl, input).pipe(
      catchError(this.handleError<Company>('addCompany'))
    );
  }
  updateCompany(company: Company): Observable<any> {
    return this.http.put(this.companyUrl, company, httpOptions).pipe(
      tap(_ => console.log(`updated hero id=${company.user.id}`)),
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
