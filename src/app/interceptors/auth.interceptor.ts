import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    let clonedRequest = request;

    if (localStorage.getItem('admin_token')) {
      clonedRequest = request.clone({
        setHeaders: {
          'Authorization': localStorage.getItem('admin_token')!
        }
      })
    }

    return next.handle(clonedRequest);
  }


  interceptUser(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    let clonedRequest = request;

    if (localStorage.getItem('user_token')) {
      clonedRequest = request.clone({
        setHeaders: {
          'Authorization': localStorage.getItem('user_token')!
        }
      })
    }

    return next.handle(clonedRequest);
  }
}
