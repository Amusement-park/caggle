import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError, retry } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
    // 'Authorization': 'my-auth-token'
  })
};

export class Discussion{
  constructor(public discusId: number
              ,public competId: number
              ,public title: string
              ,public content: string
              ,public userId: number
              ,public regiDate?: Date
              ,public editDate?: Date) {}
}

@Injectable()
export class DiscussionService {
  constructor(private http: HttpClient) {}

  get(): Observable<Discussion[]>{
    return this.http.get<Discussion[]>(`${environment.api.zaggle}/discussion`);
  }

  getByCompetitionId(id): Observable<Discussion[]>{
    let params = new HttpParams();
    params = params.append('competitionId', id);
    return this.http.get<Discussion[]>(`${environment.api.zaggle}/discussion`, {params: params});
  }

  getById(id): Observable<Discussion>{
    return this.http.get<Discussion>(`${environment.api.zaggle}/discussion/${id}`);
  }

  save(discussion: Discussion): Observable<Discussion>{
    return this.http.post<Discussion>(`${environment.api.zaggle}/discussion`, discussion);
  }

  modify(discussion: Discussion): Observable<Discussion>{
    return this.http.put<Discussion>(`${environment.api.zaggle}/discussion/${discussion.discusId}`, discussion);
  }

  delete(discussion: Discussion): Observable<Discussion>{
    return this.http.delete<Discussion>(`${environment.api.zaggle}/discussion/${discussion.discusId}`);
  }
}