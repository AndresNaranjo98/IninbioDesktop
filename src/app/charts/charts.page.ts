import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import HighchartsMore from 'highcharts/highcharts-more';
import HighchartsSolidGauge from 'highcharts/modules/solid-gauge';
import { ChartsService } from '../services/charts.service';
import { Sensores } from '../models/sensores';
import * as Highcharts from 'highcharts/highstock';
import {
  Downloader,
  DownloadRequest,
  NotificationVisibility,
} from '@ionic-native/downloader/ngx';
import { Router } from '@angular/router';
import { DescargaExcelService } from '../services/descarga-excel.service';
import { TranslateService } from '@ngx-translate/core';
import { AlertController } from '@ionic/angular';
import * as CryptoJS from 'crypto-js';
import { environment } from 'src/environments/environment';

HighchartsMore(Highcharts);
HighchartsSolidGauge(Highcharts);

@Component({
  selector: 'app-charts',
  templateUrl: './charts.page.html',
  styleUrls: ['./charts.page.scss'],
})
export class ChartsPage implements OnInit {
  num_tina = localStorage.getItem('idTina');
  datoSensores: Sensores[];
  datoSensores1: Sensores[];
  datoSensores2: Sensores[];
  datosExcel : [];
  private intervalUpdate: any = null;
  date: Date = new Date();
  formatoFecha = this.date.toISOString().split('T')[0];
  public grados: boolean = false;
  excel: any[];
  intervalFunction;
  tempMayor : number;
  tempMenor : number;
  phMayor : number;
  phMenor : number;
  naranja1 : number;
  naranja2 : number;
  naranja3 : number;
  naranja4 : number;
  brix1 : number;
  brix2: number;
  showSpinner = true;

  constructor(
    private servicio: ChartsService,
    private download: Downloader,
    private navegacion: Router,
    private xlsx: DescargaExcelService,
    private service: DescargaExcelService,
    private translate: TranslateService,
    private alertController: AlertController,
  ) {this.translate.use(localStorage.getItem('idioma'));}

  ngOnInit() {}

  refresh(): void {
    window.location.reload();
  }

  ionViewWillEnter() {
    this.graficaTinas();
    this.cargarDatos();
    this.cargarDatosFull();
    this.intervalUpdate = setInterval(
      function () {
        this.cargarDatos();
        this.cargarDatosFull();
      }.bind(this),
      60000
    );
    this.obtenerLimites();
  }

  ionViewDidLeave() {
    clearInterval(this.intervalUpdate);
    clearInterval(this.intervalFunction);
  }

  async generarExcel() {
    let num_tina = localStorage.getItem('idTina');
    let tina = num_tina.toString();
    const alert = await this.alertController.create({
      cssClass : 'alerta',
      header: this.translate.instant('FECHASEXCEL.PERIODO'),
      message : this.translate.instant('FECHASEXCEL.INGRESARFECHAS'),
      inputs: [
        {
          name : 'primer',
          type: 'date',
          id : 'fecha1',
        },
        {
          name : 'segunda',
          type: 'date',
          id: 'fecha2'
        }
      ],
      buttons: [{
        cssClass : 'confirmacion',
        text: this.translate.instant("FECHASEXCEL.GENERAR"),
          handler: async (datosAlerta) => {
            let primerFecha = datosAlerta.primer;
            let segundaFecha = datosAlerta.segunda;
            if(primerFecha != "" && segundaFecha != "") {
                this.service.generarExcel(primerFecha, segundaFecha).subscribe((response) => {
                let nombre = this.translate.instant('INFOREXCEL.TITULO')+ ' ' + tina + '.xlsx';
                let blob: Blob = response.body as Blob;
                let a = document.createElement('a');
                a.download = nombre;
                a.href = window.URL.createObjectURL(blob);
                a.click();
              });
            }
            else {
              let alert = await this.alertController.create({
                cssClass: 'alerta',
                header: this.translate.instant('FECHASEXCEL.ERROR'),
                message: this.translate.instant('FECHASEXCEL.FECHAS'),
                buttons: [
                  {
                    cssClass : 'confirmacion',
                    text : 'Ok'
                  }
                ],
              });
              alert.present();
            }
          }
      }]
    })
    await alert.present();
  }

  cambiarGrados() {
    if (this.grados) {
      this.grados = false;
    } else {
      this.grados = true;
    }
  }

  graficaTinas() {
    var ultimox,
      ultimoy,
      ultimoz,
      ultimov,
      ultimow,
      ultimou,
      ultimoTempMayor,
      ultimoTempMenor,
      ultimophMayor,
      ultimophMenor,
      chart: Highcharts.Chart;
    let idTina = localStorage.getItem('idTina');
    let tinaIndividual = localStorage.getItem('idTina');
    let empresa = localStorage.getItem('empresa');
    let categoria = localStorage.getItem('categoria');
    let idiomas = localStorage.getItem('idioma');
    let Consultar : number = 1;
    let token = localStorage.getItem('token');

    setTimeout(function () {
      if (idiomas === 'en') {
        Highcharts.charts.forEach(function (ch) {
          if (ch.options.title.text === 'Mediciones en Tiempo Real') {
            ch.setTitle({ text: 'Real-Time Measurements' });
            ch.xAxis[0].update({
              title: {
                text: 'Measurement Time',
              },
            });
            ch.yAxis[4].update({
              title: {
                text: 'Values',
              },
            });
            ch.series[0].name = 'Temperature';
            ch.series[3].name = 'Alcohol Volume';
            ch.series[4].name = 'Efficiency';
          }
          ch.redraw();
        });
      }
      else if (idiomas === 'de') {
        Highcharts.charts.forEach(function (ch) {
          if (ch.options.title.text === 'Mediciones en Tiempo Real') {
            ch.setTitle({ text: 'Echtzeit-Messungen' });
            ch.xAxis[0].update({
              title: {
                text: 'Zeitpunkt der Messung',
              },
            });
            ch.yAxis[4].update({
              title: {
                text: 'Werte',
              },
            });
            ch.series[0].name = 'Temperatur';
            ch.series[3].name = 'Alkoholgehalt';
            ch.series[4].name = 'Wirkungsgrad';
          }
          ch.redraw();
        });
      }
    },1000);

    const bytes = CryptoJS.AES.decrypt(empresa, environment.SECRET_KEY);
    const datoDesencriptado = bytes.toString(CryptoJS.enc.Utf8);

    var parseo = {'idTina' : idTina, 'empresa' : datoDesencriptado, 'categoria' : categoria};
    var parseo2 = {'tinaIndividual' : tinaIndividual, 'empresa' : datoDesencriptado, 'Consultar' : Consultar, 'categoria' : categoria};

    $.ajax({
      url: 'https://www.ininbio.com//pruebasLocalesFull/datos_Grafica.php',
      headers: {"Authorization": "Bearer "+token, "Content-Type" : "application/json"},
      type: 'POST',
      dataType : 'json',
      data : JSON.stringify(parseo),
      success: function (datosGrafica) {
        document.getElementById('spinner').style.display = 'none';
        let temp = [];
        let pH = [];
        let brix = [];
        let alcvol = [];
        let eficiencia = [];
        let tempMayor = [];
        let tempMenor = [];
        let phMayor = [];
        let phMenor = [];
        $.each(datosGrafica, function (key, value) {
          var sixHoursInMilliseconds = 6 * 60 * 60 * 1000;
          var newTimestamp = datosGrafica[key].x - sixHoursInMilliseconds;
          datosGrafica[key].x = newTimestamp;
          if (value.x) {
            datosGrafica[key].x = parseInt(value.x);
            // datosGrafica[key].x -= 6*3600;
          }
          if (value.y) {
            datosGrafica[key].y = parseFloat(value.y);
          }
          if (value.z) {
            datosGrafica[key].z = parseFloat(value.z);
          }
          if (value.w) {
            datosGrafica[key].w = parseInt(value.w);
          }
          if (value.v) {
            datosGrafica[key].v = parseInt(value.v);
          }
          if (value.u) {
            datosGrafica[key].u = parseInt(value.u);
          }
          if (value.tempMayor) {
            datosGrafica[key].tempMayor = parseFloat(value.tempMayor);
          }
          if (value.tempMenor) {
            datosGrafica[key].tempMenor = parseFloat(value.tempMenor);
          }
          if (value.phMayor) {
            datosGrafica[key].phMayor = parseFloat(value.phMayor);
          }
          if (value.phMenor) {
            datosGrafica[key].phMenor = parseFloat(value.phMenor);
          }
          temp.push([value.x, value.y]);
          pH.push([value.x, value.z]);
          brix.push([value.x, value.w]);
          alcvol.push([value.x, value.v]);
          eficiencia.push([value.x, value.u]);
          tempMayor.push([value.x, value.tempMayor]);
          tempMenor.push([value.x, value.tempMenor]);
          phMayor.push([value.x, value.phMayor]);
          phMenor.push([value.x, value.phMenor]);
        });

        var container = document.createElement('div');
        document.body.appendChild(container);

        chart = Highcharts.chart('container', {
          chart: {
            type: 'spline',
            zoomType: 'xy',
            renderTo: container,
            backgroundColor: 'transparent',
          },
          title: {
            text: 'Mediciones en Tiempo Real',
            align: 'center',
            style: {
              color: 'black',
            },
          },
          credits: {
            enabled: false,
          },
          xAxis: {
            type: 'datetime',
            dateTimeLabelFormats: {
              second: '%H:%M:%S %P',
            },
            title: {
              text: 'Hora de Medición',
              style: {
                color: 'black',
              },
            },
            labels: {
              style: {
                color: 'black',
              },
            },
            gridLineColor: '#000000',
          },
          yAxis: [
            {
              min: 0,
              max: 90,
              title: {
                text: 'Valores',
                style: {
                  color: 'black',
                },
              },
              visible: false,
              plotLines: [
                {
                  value: 0,
                  width: 1,
                },
              ],
              labels: {
                style: {
                  color: 'black',
                },
              },
              gridLineColor: 'black',
            },
            {
              min: 0,
              max: 90,
              visible: false,
            },
            {
              min: 0,
              max: 90,
              visible: false,
            },
            {
              min: 0,
              max: 90,
              visible: false,
            },
            {
              min: 0,
              max: 100,
              alignTicks: false,
              tickInterval: 10,
              title: {
                text: 'Valores',
                style: {
                  color: 'black',
                },
              },
              visible: true,
              labels: {
                style: {
                  color: 'black',
                },
              },
              gridLineColor: 'black',
            },
          ],
          tooltip: {
            formatter: function () {
              return (
                '<b>' +
                this.series.name +
                '</b><br/>' +
                Highcharts.dateFormat('%H:%M:%S %P', this.x) +
                '<br/>' +
                Highcharts.numberFormat(this.y, 2)
              );
            },
          },
          plotOptions: {
            spline: {
              marker: {
                enabled: true,
              },
            },
          },
          legend: {
            verticalAlign : 'bottom',
            layout : 'horizontal',
            alignColumns: false,
            align : 'center',
          },
          exporting: {
            enabled: false,
            chartOptions: {
              plotOptions: {
                series: {
                  dataLabels: {
                    enabled: true,
                  },
                },
              },
            },
            fallbackToExportServer: false,
          },
          series: [
            {
              name: 'Temperatura',
              type: 'spline',
              // yAxis: 0,
              data: temp,
              color: '#0833a2',
            },
            {
              name: 'pH',
              type: 'spline',
              // yAxis: 1,
              data: pH,
              color: '#14faff',
            },
            {
              name: 'Brix',
              type: 'spline',
              // yAxis: 2,
              data: brix,
              color: '#edff14',
            },
            {
              name: 'Alcohol Volumen',
              type: 'spline',
              // yAxis: 3,
              data: alcvol,
              color: '#ff14ff',
            },
            {
              name: 'Eficiencia',
              type: 'spline',
              // yAxis: 4,
              data: eficiencia,
              color: '#1eff05',
            },
            {
              name: 'MaxTemp',
              type: 'spline',
              data: tempMayor,
              color: '#5B2C6F'
            },
            {
              name: 'MinTemp',
              type: 'spline',
              data: tempMenor,
              color: '#FF0087'
            },
            {
              name: 'MaxpH',
              type: 'spline',
              data: phMayor,
              color: '#D35400'
            },
            {
              name: 'MinpH',
              type: 'spline',
              data: phMenor,
              color: '#F08080'
            }
          ],
        });
      },
    });
    this.intervalFunction = setInterval(function () {
      $.post({
        url: 'https://www.ininbio.com//pruebasLocalesFull/datos_Grafica.php',
        headers: {"Authorization": "Bearer "+token, "Content-Type" : "application/json"},
        type : 'POST',
        data : JSON.stringify(parseo2),
        dataType : 'json',
        success : 
          function (UltimosDatos) {
            if (UltimosDatos.length != 0) {
              $.each(UltimosDatos, function (key, value) {
                var sixHoursInMilliseconds = 6 * 60 * 60 * 1000;
                var newTimestamp = UltimosDatos[key].x - sixHoursInMilliseconds;
                UltimosDatos[key].x = newTimestamp;
                var varlocalx = parseInt(UltimosDatos[0].x);
                var varlocaly = parseFloat(UltimosDatos[0].y);
                var varlocalz = parseFloat(UltimosDatos[0].z);
                var varlocalw = parseFloat(UltimosDatos[0].w);
                var varlocalv = parseFloat(UltimosDatos[0].v);
                var varlocalu = parseFloat(UltimosDatos[0].u);
                var varlocaltempMayor = parseFloat(UltimosDatos[0].tempMayor);
                var varlocaltempMenor = parseFloat(UltimosDatos[0].tempMenor);
                var varlocalphMayor = parseFloat(UltimosDatos[0].phMayor);
                var varlocalphMenor = parseFloat(UltimosDatos[0].phMenor);

                if (
                  getx() != varlocalx &&
                  gety() != varlocaly &&
                  getz() != varlocalz &&
                  getw() != varlocalw &&
                  getv() != varlocalv &&
                  getu() != varlocalu &&
                  getTempMayor() != varlocaltempMayor &&
                  getTempMenor() != varlocaltempMenor &&
                  getphMayor() != varlocalphMayor &&
                  getphMenor() != varlocalphMenor
                ) {
                  chart.series[0].addPoint([varlocalx, varlocaly]);
                  chart.series[1].addPoint([varlocalx, varlocalz]);
                  chart.series[2].addPoint([varlocalx, varlocalw]);
                  chart.series[3].addPoint([varlocalx, varlocalv]);
                  chart.series[4].addPoint([varlocalx, varlocalu]);
                  chart.series[5].addPoint([varlocalx, varlocaltempMayor]);
                  chart.series[6].addPoint([varlocalx, varlocaltempMenor]);
                  chart.series[7].addPoint([varlocalx, varlocalphMayor]);
                  chart.series[8].addPoint([varlocalx, varlocalphMenor]);
                  //chart.series[0].addPoint([varlocalx, varlocaly - 1], false, true);
                  //chart.series[1].addPoint([varlocalx,varlocalz - 1], false, true);
                  //chart.series[2].addPoint([varlocalx,varlocalw - 1], false, true);
                  //chart.series[3].addPoint([varlocalx,varlocalv - 1], false, true);
                  //chart.series[4].addPoint([varlocalx,varlocalu - 1], false, true);
                  chart.redraw();
                }
              })
            }
      }
    });
    }, 60000);

    function getx() {
      return ultimox;
    }
    function gety() {
      return ultimoy;
    }
    function getz() {
      return ultimoz;
    }
    function getw() {
      return ultimow;
    }
    function getv() {
      return ultimov;
    }
    function getu() {
      return ultimou;
    }
    function getTempMayor() {
      return ultimoTempMayor;
    }
    function getTempMenor() {
      return ultimoTempMenor;
    }
    function getphMayor() {
      return ultimophMayor;
    }
    function getphMenor() {
      return ultimophMenor;
    }
  }

  obtenerLimites(){
    this.servicio.getLimites().subscribe(
      (data) => {
        let json = JSON.stringify(data);
        let response = JSON.parse(json);
        if(response != null){
        this.tempMayor = response[0]["tempMayor"];
        this.tempMenor = response[0]["tempMenor"];
        this.phMayor = response[0]["phMayor"];
        this.phMenor = response[0]["phMenor"];
        this.naranja1 = this.tempMayor - 1;
        this.naranja2 = Number(this.tempMenor) + Number(1);
        this.naranja3 = this.phMayor - 1;
        this.naranja4 = Number(this.phMenor) + Number(1);
        console.log(this.naranja3);
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }

  cargarDatos() {
    this.servicio.getUltimoSensor().subscribe(
      (data) => {
        let json = JSON.stringify(data);
        let response = JSON.parse(json);
        this.datoSensores = response;
        // console.log(this.datoSensores[0]['z']);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  cargarDatosFull() {
    this.servicio.getSensores().subscribe(
      (data) => {
        if(Object.entries(data).length != 0){
        let json = JSON.stringify(data);
        let response = JSON.parse(json);
        this.datosExcel = response;
        this.datoSensores1 = response[response.length - 1];
        this.datoSensores2 = response[response.length - 2];
        if(this.datoSensores2 != undefined && this.datoSensores1 != undefined){
          this.brix1 = this.datoSensores1['w'];
          this.brix2 = this.datoSensores2['w'];
          }
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }

  graficaTemperatura() {
    this.navegacion.navigate(['/temperatura']);
  }

  graficapH() {
    this.navegacion.navigate(['/ph']);
  }

  graficaBrix() {
    this.navegacion.navigate(['/brix']);
  }

  graficaEficiencia() {
    this.navegacion.navigate(['/eficiencia']);
  }

  graficaAlcVol() {
    this.navegacion.navigate(['/alcvol']);
  }
}
