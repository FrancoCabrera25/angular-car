import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Router } from '@angular/router';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService, private router: Router) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    request = request.clone({
      headers: request.headers.set(
        'Authorization',
        `Bearer ${this.authService.getToken()}`
      ),
    });

    return next.handle(request).pipe(
      catchError((err: HttpErrorResponse) => {
        if (err && err.status === 401) {
          this.router.navigate(['/auth/login']);
        }
        return throwError(() => err.error.message);
      })
    );
  }
}
