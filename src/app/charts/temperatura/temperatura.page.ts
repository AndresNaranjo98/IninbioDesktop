import { Component, OnInit, ElementRef } from '@angular/core';
import * as Highcharts from 'highcharts';
import * as $ from 'jquery';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import * as CryptoJS from 'crypto-js';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-temperatura',
  templateUrl: './temperatura.page.html',
  styleUrls: ['./temperatura.page.scss'],
})
export class TemperaturaPage implements OnInit {

  public showSpinner: boolean = true;

  constructor(private navegacion : Router, private translate : TranslateService, private elementRef: ElementRef) { 
    this.translate.use(localStorage.getItem('idioma'));
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.graficaTemperatura();
  }

  onClick() {
    this.navegacion.navigate(['/charts']);
  }

  graficaTemperatura() {
    var ultimox, ultimoy, ultimoTempMayor, ultimoTempMenor;
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
                text: 'Values °C',
              },
            });
            ch.series[0].name = 'Temperature';
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
                text: 'Werte °C',
              },
            });
            ch.series[0].name = 'Temperatur';
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
        let temp = [];
        let tempMayor = [];
        let tempMenor = [];
        $.each(datosGrafica, function (key, value) {
          var sixHoursInMilliseconds = 6 * 60 * 60 * 1000;
          var newTimestamp = datosGrafica[key].x - sixHoursInMilliseconds;
          datosGrafica[key].x = newTimestamp;
          if (value.x) { datosGrafica[key].x = parseInt(value.x); }
          if (value.y) { datosGrafica[key].y = parseFloat(value.y); }
          if (value.tempMayor) { datosGrafica[key].tempMayor = parseFloat(value.tempMayor); }
          if (value.tempMenor) { datosGrafica[key].tempMenor = parseFloat(value.tempMenor); }

          temp.push([value.x, value.y]);
          tempMayor.push([value.x, value.tempMayor]);
          tempMenor.push([value.x, value.tempMenor]);
        }); 
   chart = Highcharts.chart('temperatura',{
    chart: {
    type: 'spline',
    backgroundColor : 'transparent',
    },
    title: {
    text: 'Mediciones en Tiempo Real',
    align: 'center',
    style: {
      color: 'black'
  }
    },
    credits: {
      enabled: false
  },
    xAxis: {
    type: 'datetime',
    dateTimeLabelFormats: {
    second: '%H:%M:%S %P',
    },
    title: {
    text: 'Hora de Medición',
    style: {
      color: 'black'
  }
    },
    labels: {
      style: {
          color: 'black'
      }
  },
  gridLineColor: '#000000'
    },
    yAxis: [{
    title : {
      text : 'Valores °C',
      style: {
        color: 'black'
    }
    },
    visible : true,
    plotLines: [{
    value: 0,
    width: 1
    }],
    labels: {
      style: {
          color: 'black'
      }
  },
  gridLineColor: 'black'
    }],
    tooltip: {
    formatter: function () {
    return '<b>' + this.series.name + '</b><br/>' +
    Highcharts.dateFormat('%H:%M:%S %P',this.x) + '<br/>' +
    Highcharts.numberFormat(this.y,2); 
    }
    },
    plotOptions: {
      spline: {
          marker: {
              enabled: true
          }
      }
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
                    enabled: true
                }
            }
        }
    },
    fallbackToExportServer: false
  },
    series: [{
    name: 'Temperatura',
    type : "spline",
    yAxis : 0,
    data: temp,
    color : '#0833a2'
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
    }]
    });
    }
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
              var varlocaly = parseFloat(UltimosDatos[0].y);
              var varlocaltempMayor = parseFloat(UltimosDatos[0].tempMayor);
              var varlocaltempMenor = parseFloat(UltimosDatos[0].tempMenor);

              if ((getx() != varlocalx) && (gety() != varlocaly) && getTempMayor() != varlocaltempMayor && getTempMenor() != varlocaltempMenor) {

                chart.series[0].addPoint([varlocalx, varlocaly]);
                chart.series[1].addPoint([varlocalx, varlocaltempMayor]);
                chart.series[2].addPoint([varlocalx, varlocaltempMenor]);
              }
            })
          }
    }});
    }, 60000);
    function getx(){return ultimox;}
    function gety(){return ultimoy;}
    function getTempMayor() { return ultimoTempMayor; }
    function getTempMenor() { return ultimoTempMenor; }
    }

    refrescar(){
    window.location.assign('/charts');
    }
    
}
