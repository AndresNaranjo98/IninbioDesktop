import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { NavController } from '@ionic/angular';
import { Location } from '@angular/common';
import { LastPathService } from '../last-path.service';

@Injectable({
  providedIn: 'root'
})
export class TequilaAccesoGuard implements CanActivate {

  constructor(private navControl: NavController, private router: Router, private location: Location, private last : LastPathService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (localStorage.getItem('categoria') == '1') {
        return true;
      } else {
        this.router.navigateByUrl(localStorage.getItem('routLast'));
        return false;
      }
  }
  
}
