import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API } from 'src/app/shared/services/helpers/api';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  signIn(username: string, password: string): Observable<any> {
    return this.http.post(API + '/auth/signin', {
      username,
      password
    }, httpOptions);
  }

  signUp(username: string, email: string, password: string): Observable<any> {
    return this.http.post(API + '/auth/signup', {
      username,
      email,
      password
    }, httpOptions);
  }
}
