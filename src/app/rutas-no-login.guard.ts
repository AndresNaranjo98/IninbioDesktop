import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RutasNoLoginGuard implements CanActivate {

  constructor(private navControl : NavController){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      localStorage.removeItem('idTina');
      localStorage.removeItem('empresa');
      localStorage.removeItem('token');
      localStorage.removeItem('categoria');
      localStorage.removeItem('routLast');
    return true;
    }
  
}
