import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { BrixPageRoutingModule } from './brix-routing.module';
import { BrixPage } from './brix.page';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {  HttpClient } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BrixPageRoutingModule,
    TranslateModule,
  ],
  declarations: [BrixPage]
})
export class BrixPageModule {}
