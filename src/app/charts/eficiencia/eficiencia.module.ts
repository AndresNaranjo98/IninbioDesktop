import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { EficienciaPageRoutingModule } from './eficiencia-routing.module';
import { EficienciaPage } from './eficiencia.page';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {  HttpClient } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EficienciaPageRoutingModule,
    TranslateModule,
  ],
  declarations: [EficienciaPage]
})
export class EficienciaPageModule {}
