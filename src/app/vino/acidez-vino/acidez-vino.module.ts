import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AcidezVinoPageRoutingModule } from './acidez-vino-routing.module';
import { AcidezVinoPage } from './acidez-vino.page';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {  HttpClient } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AcidezVinoPageRoutingModule,
    TranslateModule
  ],
  declarations: [AcidezVinoPage]
})
export class AcidezVinoPageModule {}
