import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environments } from 'src/environments/environments';
import { Turn } from '../interface/turn.interface';

@Injectable({
  providedIn: 'root',
})
export class TurnService {
  private baseUrl = environments.baseUrl;
  constructor(private http: HttpClient) {}

  public getAllTurnByUser(): Observable<Turn[]> {
    return this.http.get<Turn[]>(`${this.baseUrl}/turn/getTurnByUser`);
  }
}
