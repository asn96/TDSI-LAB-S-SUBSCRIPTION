import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {

  /*
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  */

  constructor(private router: Router) { }

  canActivate(): Observable<boolean> | Promise<boolean> | boolean  {
    return new Promise(
      (resolve, reject) => {
        if (localStorage.getItem('token') != null) {
          resolve(true);
        } else {
          this.router.navigate(['/auth']);
          resolve(false);
        }
      }
    );
  }

}
