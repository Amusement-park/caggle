import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { environment } from '../../../environments/environment';

export class Comment{
  constructor(public commentId: number
    ,public relationId: string
    ,public commentType: string
    ,public comment: string
    ,public author: string
    ,public regiDate: Date
    ,public editDate: Date) {}
}

@Injectable()
export class CommentService {
  constructor(private http: HttpClient) {}

  get(type: string, id: number): Observable<Comment[]>{
    let params = new HttpParams();
    params = params.append('type', type);
    params = params.append('id', String(id));
    return this.http.get<Comment[]>(`${environment.api.zaggle}/comment`, {params: params});
  }
}