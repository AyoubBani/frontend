import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, from } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
const myUser = JSON.parse(localStorage.getItem('currentUser'));
const token = (myUser == null) ? '' : myUser.token;
// 'Content-Type': undefined,
const httpOptionsExtra = {
  headers: new HttpHeaders({
    'Authorization': 'Token ' + token
  })
};
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Token ' + token
  })
};
import { Document } from './document';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  private documentUrl = 'http://127.0.0.1:8000/api/document/';
  constructor(private http: HttpClient) { }


  addDocument(document: Document): Observable<Document> {
    let input = new FormData();
    input.append('nom', document.nom);
    input.append('document', document.document);
    /*
      return this.http.post<Document>(this.documentUrl, document, httpOptionsExtra)
        .pipe(
          catchError(this.handleError<Document>('addDocument'))
        );
        */
    return this.http.post<Document>(this.documentUrl, input, httpOptionsExtra).pipe(
      catchError(this.handleError<Document>('addDocument'))
    );
  }

  updateDocument(document: Document): Observable<Document> {
    return this.http.put<Document>(this.documentUrl + document.id + '/', document, httpOptionsExtra)
      .pipe(
        catchError(this.handleError<Document>('updateDocument'))
      );
  }
  getDocuments(): Observable<Document[]> {
    console.log('GETTING Document');
    // console.log(httpOptionsExtra);
    return this.http.get<Document[]>(this.documentUrl, httpOptionsExtra).pipe(
      tap(documents => this.log('fetched Documents')),
      catchError(this.handleError('getDocuments', []))
    );
  }

  deleteDocument(documentId: number): Observable<Document> {
    // const id = typeof hero === 'number' ? hero : hero.id;

    return this.http.delete<Document>(this.documentUrl + documentId + '/', httpOptions).pipe(
      // tap(_ => this.log(`deleted document id=${documentId}`)),
      catchError(this.handleError<Document>('deleteDocument'))
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
