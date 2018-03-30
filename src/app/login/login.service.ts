import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class LoginService {

  constructor(private http: HttpClient){
  }

  goToOauthPage(){
    location.href = 'https://github.com/login/oauth/authorize?client_id=8357719d0e98809c331e'
  }

  loginUsingGithub(code){
    const loginUsingGithubUrl: string = `${environment.api.zaggle}/auth/github`;
    return this.http.post(loginUsingGithubUrl, {code: code})
  }
}