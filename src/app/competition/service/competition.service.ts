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

export interface Config {
  // heroesUrl: string;
  // textfile: string;
  competitionList: string;
}

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
  configUrl = 'http://210.89.178.101:9000/competition'
  // configUrl = 'https://api.github.com/users/seeschweiler'
  constructor(private http: HttpClient) { }

  loadData() { 
    // return this.http.get(this.configUrl);
    /*
    this.http.get('http://210.89.178.101:9000/competition').subscribe(result => {
      console.log(result);
    });
    */
    // return 'hi';
  }
  getComps() : Promise<Competition[]> { 
    /*
    let promise = new Promise((resolve, reject) => {
      this.http.get(this.configUrl).toPromise().then(
        res => {
          console.log(res);
          resolve();
        }
      );
    });
    */
    return competitionsPromise;
    // return Observable.of(this.http.get(this.configUrl));
    // return Observable.of(COMPS);
   }
  getComp(id: number | string) : Promise<Competition> {
    return this.getComps()
        .then(comps => comps.find(comp => comp.competId === +id))
  }

  /* 
  getConfig() {
      return this.http.get<Config>(this.configUrl, {
        headers:new HttpHeaders().
          set('Accept', 'application/json').
          set('Access-Control-Allow-Headers', 'Content-Type').
          set('Access-Control-Allow-Origin', '*')
      })
      .pipe(retry(3), // retry a failed request up to 3 times
      catchError(this.handleError) // then handle the error
      );
  }
  getConfigResponse(): Observable<HttpResponse<Config>> {
    return this.http.get<Config>(
      this.configUrl, { headers:new HttpHeaders().
          // set('Content-Type', 'application/json').
          set('Accept', 'application/json')
          // set('Access-Control-Allow-Headers', 'Content-Type').
          // set('Access-Control-Allow-Origin', '*'),
          ,observe: 'response' });
  }
  */

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an ErrorObservable with a user-facing error message
    return new ErrorObservable(
      'Something bad happened; please try again later.');
  };

  makeIntentionalError() {
    return this.http.get('not/a/real/url')
      .pipe(
        catchError(this.handleError)
      );
  }
}

/*



  getConfig_1() {
    return this.http.get(this.configUrl);
  }

  getConfig_2() {
    // now returns an Observable of Config
    return this.http.get<Config>(this.configUrl);
  }

  getConfig_3() {
    return this.http.get<Config>(this.configUrl)
      .pipe(
        catchError(this.handleError)
      );
  }

*/