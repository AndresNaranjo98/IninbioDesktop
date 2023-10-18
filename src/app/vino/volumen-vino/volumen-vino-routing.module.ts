import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VolumenVinoPage } from './volumen-vino.page';

const routes: Routes = [
  {
    path: '',
    component: VolumenVinoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VolumenVinoPageRoutingModule {}
