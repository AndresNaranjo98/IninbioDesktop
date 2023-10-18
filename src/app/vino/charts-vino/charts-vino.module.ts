import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ChartsVinoPageRoutingModule } from './charts-vino-routing.module';
import { ChartsVinoPage } from './charts-vino.page';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {  HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChartsVinoPageRoutingModule,
    HttpClientModule,
    TranslateModule,
  ],
  declarations: [ChartsVinoPage]
})
export class ChartsVinoPageModule {}
