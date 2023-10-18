import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DensidadVinoPageRoutingModule } from './densidad-vino-routing.module';
import { DensidadVinoPage } from './densidad-vino.page';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {  HttpClient } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DensidadVinoPageRoutingModule,
    TranslateModule
  ],
  declarations: [DensidadVinoPage]
})
export class DensidadVinoPageModule {}
