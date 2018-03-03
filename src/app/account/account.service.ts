import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AccountService {
  constructor(private http: HttpClient) {}

  getAccount(){
    const meUrl: string = 'http://localhost:9000/api/account/me';
    return this.http.get(meUrl);
  }
}