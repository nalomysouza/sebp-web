import { Injectable } from '@angular/core';
import { CurrentUser } from 'src/app/shared/model/helpers/current-user.model';
import { User } from 'src/app/shared/model/user.model';
import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _tokenService: TokenStorageService) {
  }

  isLoggedIn(): boolean {
    return !!this._tokenService.getToken();
  }

  login(userAuthentication: CurrentUser) {
    let token = userAuthentication.token;
    this._tokenService.saveToken(token);
    let user = userAuthentication.user;
    this._tokenService.saveUser(user);
  }

  logout() {
    this._tokenService.signOut();
  }

  userLoggedIn(): User {
    return this._tokenService.getUser();
  }
}
