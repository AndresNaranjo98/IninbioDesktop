import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AcidezVinoPage } from './acidez-vino.page';

const routes: Routes = [
  {
    path: '',
    component: AcidezVinoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AcidezVinoPageRoutingModule {}
