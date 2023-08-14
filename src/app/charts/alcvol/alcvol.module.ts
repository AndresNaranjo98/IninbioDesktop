import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AlcvolPageRoutingModule } from './alcvol-routing.module';
import { AlcvolPage } from './alcvol.page';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {  HttpClient } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlcvolPageRoutingModule,
    TranslateModule,
  ],
  declarations: [AlcvolPage]
})
export class AlcvolPageModule {}
