import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { signInResponse } from '../home.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
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
