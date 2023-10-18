import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TemperaturaVinoPageRoutingModule } from './temperatura-vino-routing.module';
import { TemperaturaVinoPage } from './temperatura-vino.page';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {  HttpClient } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TemperaturaVinoPageRoutingModule,
    TranslateModule
  ],
  declarations: [TemperaturaVinoPage]
})
export class TemperaturaVinoPageModule {}
