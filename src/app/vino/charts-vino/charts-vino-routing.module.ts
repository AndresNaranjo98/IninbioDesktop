import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChartsVinoPage } from './charts-vino.page';

const routes: Routes = [
  {
    path: '',
    component: ChartsVinoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChartsVinoPageRoutingModule {}
