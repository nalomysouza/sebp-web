import { Injectable } from '@angular/core';
import { CurrentUser } from 'src/app/shared/model/helpers/current-user.model';
import { User } from 'src/app/shared/model/user.model';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';

@Injectable()
export class TokenStorageService {

  signIn(userAuthentication: CurrentUser) {
    const { token, user } = userAuthentication;
    window.sessionStorage.clear();
    window.sessionStorage.setItem(TOKEN_KEY, token);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  signOut(): void {
    window.sessionStorage.clear();
  }

  get isLoggedIn(): boolean {
    return !!this.token;
  }

  get user(): User | null {
    const user = window.sessionStorage.getItem(USER_KEY);
    return user ? JSON.parse(user) : null;
  }

  get token(): string | null {
    return window.sessionStorage.getItem(TOKEN_KEY);
  }

}
