import { Injectable } from '@angular/core';
import { CurrentUser } from '@app/shared/model/helpers/current-user.model';
import { User } from '@app/shared/model/user.model';
import { AUTH } from '@app/shared/utils/constants';
@Injectable()
export class TokenStorageService {

  signIn(userAuthentication: CurrentUser) {
    const { token, user } = userAuthentication;
    window.sessionStorage.clear();
    window.sessionStorage.setItem(AUTH.TOKEN_KEY, token);
    window.sessionStorage.setItem(AUTH.USER_KEY, JSON.stringify(user));
  }

  signOut(): void {
    window.sessionStorage.clear();
  }

  get isLoggedIn(): boolean {
    return !!this.token;
  }

  get user(): User {
    const user = window.sessionStorage.getItem(AUTH.USER_KEY);
    return user ? JSON.parse(user) : null;
  }

  get token(): string | null {
    return window.sessionStorage.getItem(AUTH.TOKEN_KEY);
  }

}
