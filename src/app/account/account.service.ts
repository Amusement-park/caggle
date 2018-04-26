import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'
import { Observable } from 'rxjs/Observable';

import { User } from '../shared/services/user.service';

@Injectable()
export class AccountService {
  constructor(private http: HttpClient) {}

  getAccount(): Observable<User>{
    const url: string = `${environment.api.zaggle}/api/account/me`;
    return this.http.get<User>(url);
  }
}