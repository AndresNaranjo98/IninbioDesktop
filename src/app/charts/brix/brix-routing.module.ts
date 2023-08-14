import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrixPage } from './brix.page';

const routes: Routes = [
  {
    path: '',
    component: BrixPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BrixPageRoutingModule {}
