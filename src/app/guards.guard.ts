import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './modules/login/login.service';

@Injectable({
  providedIn: 'root'
})
export class GuardsGuard implements CanActivate {

  constructor(private router: Router,
    private loginService: LoginService) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    // if (localStorage.getItem('logged') === "true") {
    //   return true;
    // }
    if (this.loginService.userLogged.value !== true) {
      this.router.navigate(['/home']);
      //return false;
    }

    console.log(this.loginService.userLogged, this.loginService);
    return true;
  }
}