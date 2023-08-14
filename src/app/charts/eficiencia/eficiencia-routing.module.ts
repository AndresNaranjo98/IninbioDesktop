import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EficienciaPage } from './eficiencia.page';

const routes: Routes = [
  {
    path: '',
    component: EficienciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EficienciaPageRoutingModule {}
