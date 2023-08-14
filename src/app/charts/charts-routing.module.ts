import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChartsPage } from './charts.page';

const routes: Routes = [
  {
    path: '',
    component: ChartsPage
  },
  {
    path: 'temperatura',
    loadChildren: () => import('./temperatura/temperatura.module').then( m => m.TemperaturaPageModule)
  },
  {
    path: 'ph',
    loadChildren: () => import('./ph/ph.module').then( m => m.PhPageModule)
  },  {
    path: 'brix',
    loadChildren: () => import('./brix/brix.module').then( m => m.BrixPageModule)
  },
  {
    path: 'eficiencia',
    loadChildren: () => import('./eficiencia/eficiencia.module').then( m => m.EficienciaPageModule)
  },
  {
    path: 'alcvol',
    loadChildren: () => import('./alcvol/alcvol.module').then( m => m.AlcvolPageModule)
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChartsPageRoutingModule {}
