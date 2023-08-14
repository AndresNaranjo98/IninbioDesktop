import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlcvolPage } from './alcvol.page';

const routes: Routes = [
  {
    path: '',
    component: AlcvolPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlcvolPageRoutingModule {}
