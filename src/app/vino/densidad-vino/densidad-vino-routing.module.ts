import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DensidadVinoPage } from './densidad-vino.page';

const routes: Routes = [
  {
    path: '',
    component: DensidadVinoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DensidadVinoPageRoutingModule {}
