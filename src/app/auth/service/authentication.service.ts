import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { first, map, Observable } from 'rxjs';
import { API } from '@app/shared/services/helpers/api';
import { CurrentUser } from '@app/shared/model/helpers/current-user.model';
import { User } from '@app/shared/model/user.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  signIn(user: User): Observable<CurrentUser> {
    return this.http
      .post(API + '/v1/auth/signin', user, httpOptions)
      .pipe(first(), map(response => response as CurrentUser));
  }

  signUp(user: User): Observable<User> {
    return this.http
      .post(API + '/v1/auth/signup', user, httpOptions)
      .pipe(first(), map(response => response as User));
  }
}
