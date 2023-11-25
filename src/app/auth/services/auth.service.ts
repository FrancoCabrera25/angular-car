import { HttpClient } from '@angular/common/http';
import { Injectable, computed, signal } from '@angular/core';
import { Observable, catchError, map, tap, throwError } from 'rxjs';
import { environments } from 'src/environments/environments';
import { User } from '../interface/user.interface';
import { AuthStatus } from '../interface/auth-status.enum';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  private baseUrl = environments.baseUrl;
  private _currentUser = signal<User | null>(null);
  private _authStatus = signal<AuthStatus>(AuthStatus.checking);

  public currentUser = computed(() => this._currentUser());
  public authStatus = computed(() => this._authStatus());

  public login(email: string, password: string): Observable<User> {
    return this.http
      .post<User>(`${this.baseUrl}/auth/login`, { email, password })
      .pipe(
        tap((user) => console.log('user', user)),
        tap((user) => {
          this._currentUser.set(user);
          this._authStatus.set(AuthStatus.authenticated);
          localStorage.setItem('token', user.token);
        }),
        catchError(() => {
          this._authStatus.set(AuthStatus.notAuthenticated);
          return throwError(() => 'Error login');
        })
      );
  }

  public getToken(): string {
    return localStorage.getItem('token') || '';
  }
}
