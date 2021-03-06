import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Competition } from '../competition';
import { CompetitionOverview } from '../competition-overview';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError, retry } from 'rxjs/operators';
import { HttpErrorHandler, HandleError } from './http-error-handler.service';

import { environment } from '../../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
    // 'Authorization': 'my-auth-token'
  })
};

// dummy data
const COMPS = [
  new Competition(1, "1" , "LEE"),
  new Competition(2, "1" , "LEE"),
  new Competition(3, "1" , "LEE")
];
let competitionsPromise = Promise.resolve(COMPS);

@Injectable()
export class CompetitionService {
  // configUrl = 'assets/config.json'
  // private compsUrl = 'http://210.89.178.101:9000/competition'
  private compsUrl = `${environment.api.zaggle}/competition`
  private handleError: HandleError;

  constructor(
    private http: HttpClient) { // httpErrorHandler: HttpErrorHandler) {
    // this.handleError = httpErrorHandler.createHandleError('CompsService');
  }

  // getComps(): Competition[] {
  getComps(): Observable<Competition[]> {
    // return COMPS;
    return this.http.get<Competition[]>(this.compsUrl);
      // .pipe(catchError(this.handleError('get Competitions', []))
      // .pipe(catchError(this.handleError('get Competitions', [])));
  }

  getComp(id: number): Observable<Competition> {
  // getComp(id: number): Competition {
    const url = `${this.compsUrl}/${id}`;
    return this.http.get<Competition>(url);
    // return COMPS[id];
    // .pipe(tap(_ => this.log(`fetched competition id=${id}`)));
  }

  getOverview(id: number): Observable<CompetitionOverview> {
    // /competition/{id}/overview
    const url = `${this.compsUrl}/${id}/overview`;
    return this.http.get<CompetitionOverview>(url);
  }
}