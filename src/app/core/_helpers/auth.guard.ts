import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenStorageService } from '../_services/token-storage.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private _storageService: TokenStorageService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    if (this._storageService.isLoggedIn) {
      return true;
    }
    this.router.navigate(['/auth/login']);
    return false;
  }
}
