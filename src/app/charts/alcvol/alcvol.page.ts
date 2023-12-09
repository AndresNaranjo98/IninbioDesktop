import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import * as $ from 'jquery';
import { TranslateService } from '@ngx-translate/core';
import * as CryptoJS from 'crypto-js';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-alcvol',
  templateUrl: './alcvol.page.html',
  styleUrls: ['./alcvol.page.scss'],
})
export class AlcvolPage implements OnInit {

  showSpinner = true;

  constructor(private translate : TranslateService) {
    this.translate.use(localStorage.getItem('idioma'));
  }

  ngOnInit() { }

  ionViewWillEnter() {
    this.graficaAlcVol();
  }

  ionViewDidLeave() { }

  graficaAlcVol() {
    var ultimox, ultimov;
    var chart;
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
            ch.yAxis[0].update({
              title: {
                text: 'Values %',
              },
            });
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
            ch.yAxis[0].update({
              title: {
                text: 'Werte %',
              },
            });
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
      type: "POST",
      dataType: "json",
      data : JSON.stringify(parseo),
      success: function (datosGrafica) {
      document.getElementById('cargador').style.display = 'none';
        let alcvol = [];
        $.each(datosGrafica, function (key, value) {
          var sixHoursInMilliseconds = 6 * 60 * 60 * 1000;
          var newTimestamp = datosGrafica[key].x - sixHoursInMilliseconds;
          datosGrafica[key].x = newTimestamp;
          if (value.x) {
            datosGrafica[key].x = parseInt(value.x);
          }
          if (value.v) {
            datosGrafica[key].v = parseFloat(value.v);
          }

          alcvol.push([value.x, value.v]);
        });

        chart = Highcharts.chart('alcvol', {
          chart: {
            type: 'spline',
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
              title: {
                text: 'Valores %',
                style: {
                  color: 'black',
                },
              },
              visible: true,
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
            enabled: false,
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
              name: '%Alc.Vol',
              type: 'spline',
              yAxis: 0,
              data: alcvol,
              color: '#ff14ff',
            }
          ],
        });
      },
    });
    setInterval(function () {
      $.post({
        url : 'https://www.ininbio.com//pruebasLocalesFull/datos_Grafica.php',
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
              var varlocalv = parseFloat(UltimosDatos[0].v);

              if ((getx() != varlocalx) && (getv() != varlocalv)) {

                chart.series[0].addPoint([varlocalx, varlocalv]);
              }
            })
          }
    }});
    }, 60000);
    function getx() {
      return ultimox;
    }
    function getv() {
      return ultimov;
    }
  }

  refrescar() {
    window.location.assign('/charts');
  }
}
