import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TemperaturaVinoPage } from './temperatura-vino.page';

const routes: Routes = [
  {
    path: '',
    component: TemperaturaVinoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TemperaturaVinoPageRoutingModule {}
