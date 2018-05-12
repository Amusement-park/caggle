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

  refreshToken(){
    const refreshTokenUrl: string = `${environment.api.zaggle}/auth/token`;
    const token = JSON.parse(localStorage.getItem('token'));
    return this.http.patch(refreshTokenUrl, {refreshToken: token.refreshToken})
  }
}