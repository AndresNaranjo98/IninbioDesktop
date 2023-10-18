import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts/highstock';
import * as CryptoJS from 'crypto-js';
import { environment } from 'src/environments/environment';
import * as $ from 'jquery';
import { ChartsService } from 'src/app/services/charts.service';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { DescargaExcelService } from 'src/app/services/descarga-excel.service';

@Component({
  selector: 'app-charts-vino',
  templateUrl: './charts-vino.page.html',
  styleUrls: ['./charts-vino.page.scss'],
})
export class ChartsVinoPage implements OnInit {

  intervalFunction;
  showSpinner = true;
  intervalUpdate;
  datoSensores = ['densidad', 'acidez', 'temperatura, volumen'];
  num_tina = localStorage.getItem('idTina');
  datosExcel : [];

  constructor(private servicio: ChartsService, private translate: TranslateService, private navegacion: Router, private alertController: AlertController, private service: DescargaExcelService) {
    this.translate.use(localStorage.getItem('idioma'));
  }

  ngOnInit() {
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
}

ionViewDidLeave() {
  clearInterval(this.intervalUpdate);
  clearInterval(this.intervalFunction);
}

cargarDatos() {
  this.servicio.getUltimoSensor().subscribe(
    (data) => {
      let json = JSON.stringify(data);
      let response = JSON.parse(json);
      this.datoSensores = response;
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
      console.log(this.datosExcel);
      }
    },
    (err) => {
      console.log(err);
    }
  );
}

  graficaTinas() {
    var ultimox,
      ultimoy,
      ultimoz,
      ultimov,
      ultimow,
      chart: Highcharts.Chart;
    let idTina = localStorage.getItem('idTina');
    let tinaIndividual = localStorage.getItem('idTina');
    let empresa = localStorage.getItem('empresa');
    let idiomas = localStorage.getItem('idioma');
    let Consultar : number = 1;
    let token = localStorage.getItem('token');
    let categoria = localStorage.getItem('categoria');

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
        let acidez = [];
        let densidad = [];
        let temperatura = [];
        let volumen = [];
        $.each(datosGrafica, function (key, value) {
          var sixHoursInMilliseconds = 6 * 60 * 60 * 1000;
          var newTimestamp = datosGrafica[key].fecha - sixHoursInMilliseconds;
          datosGrafica[key].fecha = newTimestamp;
          if (value.fecha) {
            datosGrafica[key].fecha = parseInt(value.fecha);
            // datosGrafica[key].x -= 6*3600;
          }
          if (value.densidad) {
            datosGrafica[key].densidad = parseFloat(value.densidad);
          }
          if (value.acidez) {
            datosGrafica[key].acidez = parseFloat(value.acidez);
          }
          if (value.temperatura) {
            datosGrafica[key].temperatura = parseFloat(value.temperatura);
          }
          if (value.volumen) {
            datosGrafica[key].volumen = parseFloat(value.volumen);
          }
          densidad.push([value.fecha, value.densidad]);
          acidez.push([value.fecha, value.acidez]);
          temperatura.push([value.fecha, value.temperatura]);
          volumen.push([value.fecha, value.volumen]);
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
              name: 'Densidad',
              type: 'spline',
              // yAxis: 0,
              data: densidad,
              color: '#0833a2',
            },
            {
              name: 'Acidez',
              type: 'spline',
              // yAxis: 1,
              data: acidez,
              color: '#14faff',
            },
            {
              name: 'Temperatura',
              type: 'spline',
              // yAxis: 2,
              data: temperatura,
              color: '#edff14',
            },
            {
              name: 'Volumen',
              type: 'spline',
              // yAxis: 3,
              data: volumen,
              color: '#ff14ff',
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
          if(UltimosDatos.length != 0){
            var updateFecha = parseInt(UltimosDatos[0].fecha);
            var updateDensidad = parseFloat(UltimosDatos[0].densidad);
            var updateAcidez = parseFloat(UltimosDatos[0].acidez);
            var updateTemperatura = parseFloat(UltimosDatos[0].temperatura);
            var updateVolumen = parseFloat(UltimosDatos[0].volumen);
            
            if (
              getx() != updateFecha &&
              gety() != updateDensidad &&
              getz() != updateAcidez &&
              getw() != updateTemperatura &&
              getv() != updateVolumen) {
                chart.series[0].addPoint([updateFecha, updateDensidad]);
                chart.series[1].addPoint([updateFecha, updateAcidez]);
                chart.series[2].addPoint([updateFecha, updateTemperatura]);
                chart.series[3].addPoint([updateFecha, updateVolumen]);
            //chart.series[0].addPoint([varlocalx, varlocaly - 1], false, true);
            //chart.series[1].addPoint([varlocalx,varlocalz - 1], false, true);
            //chart.series[2].addPoint([varlocalx,varlocalw - 1], false, true);
            //chart.series[3].addPoint([varlocalx,varlocalv - 1], false, true);
            //chart.series[4].addPoint([varlocalx,varlocalu - 1], false, true);
            chart.redraw();
          }
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
  }

  graficaDensidad() {
    this.navegacion.navigate(['/densidad-vino']);
  }

  graficAcidez() {
    this.navegacion.navigate(['/acidez-vino']);
  }

  graficaTemperatura() {
    this.navegacion.navigate(['temperatura-vino']);
  }

  graficaVolumen() {
    this.navegacion.navigate(['/volumen-vino']);
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

}