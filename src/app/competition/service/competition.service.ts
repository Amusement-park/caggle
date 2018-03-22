import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Competition } from '../competition';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError, retry } from 'rxjs/operators';
import { HttpErrorHandler, HandleError } from './http-error-handler.service';


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
  private compsUrl = 'http://210.89.178.101:9000/competition'
  private handleError: HandleError;
  constructor(
    private http: HttpClient){//, httpErrorHandler: HttpErrorHandler) {
    // this.handleError = httpErrorHandler.createHandleError('CompsService');
  }

    /*
  getComps(): Observable<Competition[]> {
    return this.http.get<Competition[]>(this.compsUrl)
      .pipe(catchError(this.handleError('get Competitions', []))
      );
  }
    */
}