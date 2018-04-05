import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
// import { Competition } from '../competition';
// import { CompetitionOverview } from '../competition-overview';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError, retry } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
// import { HttpErrorHandler, HandleError } from './http-error-handler.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
    // 'Authorization': 'my-auth-token'
  })
};

// dummy data
// const COMPS = [
  // new Competition(1, "1" , "LEE"),
  // new Competition(2, "1" , "LEE"),
  // new Competition(3, "1" , "LEE")
// ];
// let competitionsPromise = Promise.resolve(COMPS);

export class Discussion{
  constructor(public discusId: number
              ,public title: string
              ,public content: string
              ,public author: string
              ,public subject: string
              ,public regDate: Date
              ,public editDate: Date) {}
}

@Injectable()
export class DiscussionService {
  constructor(private http: HttpClient) {}

  get(): Observable<Discussion[]>{
    return this.http.get<Discussion[]>(`${environment.api.zaggle}/discussion`);
  }

  getById(id): Observable<Discussion>{
    return this.http.get<Discussion>(`${environment.api.zaggle}/discussion/${id}`);
  }

  save(discussion: Discussion): Observable<Discussion>{
    return this.http.post<Discussion>(`${environment.api.zaggle}/discussion`, discussion);
  }

  modify(discussion: Discussion): Observable<Discussion>{
    return this.http.put<Discussion>(`${environment.api.zaggle}/discussion`, discussion);
  }
}