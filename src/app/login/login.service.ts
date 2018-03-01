import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LoginService {

  constructor(private http: HttpClient){
  }

  goToOauthPage(){
    location.href = 'https://github.com/login/oauth/authorize?client_id=8357719d0e98809c331e'
  }

  loginUsingGithub(code){
    const loginUsingGithubUrl: string = 'http://localhost:9000/auth/github';
    return this.http.post(loginUsingGithubUrl, {code: code})
  }
}