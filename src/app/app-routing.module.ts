import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { RutasLoginGuard } from './rutas-login.guard';
import { RutasNoLoginGuard } from './rutas-no-login.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import ('./login/login.module').then(m => m.LoginPageModule),
    canActivate : [RutasNoLoginGuard]
  },
  {
    path: 'registro',
    loadChildren: () => import ('./registro/registro.module').then(m => m.RegistroPageModule),
     canActivate : [RutasNoLoginGuard]
  },
  {
    path: 'charts',
    loadChildren: () => import('./charts/charts.module').then( m => m.ChartsPageModule),
    canActivate : [RutasLoginGuard]
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule),
    canActivate : [RutasLoginGuard]
  },
  {
    path: 'principal',
    loadChildren: () => import('./principal/principal.module').then( m => m.PrincipalPageModule),
    canActivate : [RutasLoginGuard]
  },
  {
    path: 'temperatura',
    loadChildren: () => import('./charts/temperatura/temperatura.module').then( m => m.TemperaturaPageModule),
    canActivate : [RutasLoginGuard]
  },
  {
    path: 'ph',
    loadChildren: () => import('./charts/ph/ph.module').then( m => m.PhPageModule),
    canActivate : [RutasLoginGuard]
  },
  {
    path: 'brix',
    loadChildren: () => import('./charts/brix/brix.module').then( m => m.BrixPageModule),
    canActivate : [RutasLoginGuard]
  },
  {
    path: 'eficiencia',
    loadChildren: () => import('./charts/eficiencia/eficiencia.module').then( m => m.EficienciaPageModule),
    canActivate : [RutasLoginGuard]
  },
  {
    path: 'alcvol',
    loadChildren: () => import('./charts/alcvol/alcvol.module').then( m => m.AlcvolPageModule),
    canActivate : [RutasLoginGuard]
  },
  {
    path: 'rest-contrasena',
    loadChildren: () => import('./rest-contrasena/rest-contrasena.module').then( m => m.RestContrasenaPageModule),
    canActivate : [RutasNoLoginGuard]
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
