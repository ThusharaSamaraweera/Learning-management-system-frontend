import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error) => {
        if (error) {
          switch (error.status) {
            case 400:
              console.error('400', error.message);
              break;
            case 401:
              console.error('401', error.message);
              break;
            case 403:
              console.error('403', error.message);
              break;
            case 404:
              console.error('404', error.message);
              break;
            case 500:
              console.error('500', error.message);
              break;
            default:
              console.error('default', error.message);
              break;
          }
        }
        return throwError(() => error);
      })
    );
  }
}
