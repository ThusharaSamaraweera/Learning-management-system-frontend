import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpEvent,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable()
export class APIInterceptor implements HttpInterceptor {
  constructor() {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let isDone = false;
    if (req.url.includes('/assets/i18n/')) return next.handle(req);

    let requestUrl = ``;
    let authToken = '';

    req = req.clone({
      url: requestUrl,
      setHeaders: {
        Authorization: `Bearer ${authToken}`,
      },
    });
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.error instanceof ErrorEvent) {
          console.log(error.error.message);
        } else {
          console.log(` ${error.status}\nMessage: ${error.message}`);
        }
        return throwError(() => error);
      })
    );
  }
}
