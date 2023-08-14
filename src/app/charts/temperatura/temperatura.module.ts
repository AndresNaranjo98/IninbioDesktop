import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TemperaturaPageRoutingModule } from './temperatura-routing.module';
import { TemperaturaPage } from './temperatura.page';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {  HttpClient } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TemperaturaPageRoutingModule,
    TranslateModule,
  ],
  declarations: [TemperaturaPage],
})
export class TemperaturaPageModule {}
