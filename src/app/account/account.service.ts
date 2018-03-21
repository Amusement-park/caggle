import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'

@Injectable()
export class AccountService {
  constructor(private http: HttpClient) {}

  getAccount(){
    const meUrl: string = `${environment.api.zaggle}/api/account/me`;
    return this.http.get(meUrl);
  }
}