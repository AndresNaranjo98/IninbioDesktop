import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioVinoPage } from './inicio-vino.page';

const routes: Routes = [
  {
    path: '',
    component: InicioVinoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicioVinoPageRoutingModule {}
