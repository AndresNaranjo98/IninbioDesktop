import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';
import { NavController } from '@ionic/angular';
import { LastPathService } from '../last-path.service';

@Injectable({
  providedIn: 'root'
})
export class VinoAccesoGuard implements CanActivate {

  constructor(private router: Router, private location: Location, private navControl: NavController, private last : LastPathService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (localStorage.getItem('categoria') == '2') {
        return true;
      } else {
        this.router.navigateByUrl(localStorage.getItem('routLast'));
        return false;
      }
  }
  
}
