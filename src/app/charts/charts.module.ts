import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ChartsPageRoutingModule } from './charts-routing.module';
import { ChartsPage } from './charts.page';
import { ChartModule, HIGHCHARTS_MODULES } from 'angular-highcharts';
import { HttpClientModule } from '@angular/common/http';
import * as more from 'highcharts/highcharts-more.src';
import * as exporting from 'highcharts/modules/exporting.src';
import * as solidGauge from 'highcharts/modules/solid-gauge.src';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {  HttpClient } from '@angular/common/http';
import { DateMinusSixHoursPipe } from '../date-minus-six-hours.pipe';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChartsPageRoutingModule,
    ChartModule,
    HttpClientModule,
    TranslateModule,
  ],
  declarations: [ChartsPage, DateMinusSixHoursPipe],
  providers: [
    { provide: HIGHCHARTS_MODULES, useFactory: () => [more, solidGauge,exporting] }
  ],
  exports: [
    DateMinusSixHoursPipe
  ]
})
export class ChartsPageModule {}
