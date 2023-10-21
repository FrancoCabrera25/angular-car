import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, tap } from 'rxjs';
import { environments } from 'src/environments/environments';
import { User } from '../interface/user.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  private baseUrl = environments.baseUrl;
  private _currentUser?: User;

  get currentUser(): User | undefined {
    return this._currentUser;
  }
  public login(email: string, password: string): Observable<User> {
    return this.http
      .post<User>(`${this.baseUrl}/auth/login`, { email, password })
      .pipe(
        tap((user) => console.log('user', user)),
        tap((user) => (this._currentUser = user)),
        tap((user) => localStorage.setItem('token', user.token))
      );
  }

  public getToken(): string {
    return localStorage.getItem('token') || '';
  }
}
