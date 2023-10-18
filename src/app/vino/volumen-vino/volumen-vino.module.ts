import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { VolumenVinoPageRoutingModule } from './volumen-vino-routing.module';
import { VolumenVinoPage } from './volumen-vino.page';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {  HttpClient } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VolumenVinoPageRoutingModule,
    TranslateModule
  ],
  declarations: [VolumenVinoPage]
})
export class VolumenVinoPageModule {}
