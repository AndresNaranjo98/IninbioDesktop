import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { RutasLoginGuard } from './rutas-login.guard';
import { RutasNoLoginGuard } from './rutas-no-login.guard';
import { VinoAccesoGuard } from './guards/vino-acceso.guard';
import { TequilaAccesoGuard } from './guards/tequila-acceso.guard';

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
    canActivate : [TequilaAccesoGuard]
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule),
    canActivate : [TequilaAccesoGuard]
  },
  {
    path: 'principal',
    loadChildren: () => import('./principal/principal.module').then( m => m.PrincipalPageModule),
    canActivate : [TequilaAccesoGuard]
  },
  {
    path: 'temperatura',
    loadChildren: () => import('./charts/temperatura/temperatura.module').then( m => m.TemperaturaPageModule),
    canActivate : [TequilaAccesoGuard]
  },
  {
    path: 'ph',
    loadChildren: () => import('./charts/ph/ph.module').then( m => m.PhPageModule),
    canActivate : [TequilaAccesoGuard]
  },
  {
    path: 'brix',
    loadChildren: () => import('./charts/brix/brix.module').then( m => m.BrixPageModule),
    canActivate : [TequilaAccesoGuard]
  },
  {
    path: 'eficiencia',
    loadChildren: () => import('./charts/eficiencia/eficiencia.module').then( m => m.EficienciaPageModule),
    canActivate : [TequilaAccesoGuard]
  },
  {
    path: 'alcvol',
    loadChildren: () => import('./charts/alcvol/alcvol.module').then( m => m.AlcvolPageModule),
    canActivate : [TequilaAccesoGuard]
  },
  {
    path: 'rest-contrasena',
    loadChildren: () => import('./rest-contrasena/rest-contrasena.module').then( m => m.RestContrasenaPageModule),
    canActivate : [RutasNoLoginGuard]
  },
  {
    path: 'inicio-vino',
    loadChildren: () => import('./vino/inicio-vino/inicio-vino.module').then( m => m.InicioVinoPageModule),
    canActivate : [VinoAccesoGuard]
  },
  {
    path: 'charts-vino',
    loadChildren: () => import('./vino/charts-vino/charts-vino.module').then( m => m.ChartsVinoPageModule),
    canActivate : [VinoAccesoGuard]
  },
  {
    path: 'densidad-vino',
    loadChildren: () => import('./vino/densidad-vino/densidad-vino.module').then( m => m.DensidadVinoPageModule),
    canActivate : [VinoAccesoGuard]
  },
  {
    path: 'acidez-vino',
    loadChildren: () => import('./vino/acidez-vino/acidez-vino.module').then( m => m.AcidezVinoPageModule),
    canActivate : [VinoAccesoGuard]
  },
  {
    path: 'temperatura-vino',
    loadChildren: () => import('./vino/temperatura-vino/temperatura-vino.module').then( m => m.TemperaturaVinoPageModule),
    canActivate : [VinoAccesoGuard]
  },
  {
    path: 'volumen-vino',
    loadChildren: () => import('./vino/volumen-vino/volumen-vino.module').then( m => m.VolumenVinoPageModule),
    canActivate : [VinoAccesoGuard]
  }




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
