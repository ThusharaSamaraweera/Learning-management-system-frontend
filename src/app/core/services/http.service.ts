import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class HttpService {
  constructor(private http: HttpClient) {}

  GET<T>(url: string, params?: any) {
    let headers = new HttpHeaders();
    headers = this.appendCustomHeaders(headers);
    return this.http.get<T>(url, { headers, params });
  }

  POST<T>(url: string, input: any, params?: any) {
    let headers = new HttpHeaders();
    headers = this.appendCustomHeaders(headers);
    return this.http.post<T>(url, input, { headers, params });
  }

  PUT<T>(url: string, input: any, params?: any, headers?: HttpHeaders) {
    if (!headers) headers = new HttpHeaders();
    headers = this.appendCustomHeaders(headers);
    return this.http.put<T>(url, input, { headers: headers, params });
  }

  DELETE<T>(url: string, params?: any) {
    let headers = new HttpHeaders();
    headers = this.appendCustomHeaders(headers);
    return this.http.delete<T>(url, { headers, params });
  }

  appendCustomHeaders(headers: HttpHeaders) {
    return headers;
  }

}
