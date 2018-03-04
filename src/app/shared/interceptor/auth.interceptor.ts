import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    const tokenStr = localStorage.getItem('token')
    if (tokenStr) {

      const token = JSON.parse(tokenStr)
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token.accessToken}`
        }
      });
    }

    return next.handle(request);
  }
}