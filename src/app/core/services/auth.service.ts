import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { signInResponse } from '../core.model';

@Injectable({
  providedIn: 'root',
})
export class authService {
  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<signInResponse> {
    const payload = {
      email: username,
      password,
    };
    const url = environment.apiUrl + '/auth/login'
    return this.http.post<signInResponse>(url, payload);
  }
}
