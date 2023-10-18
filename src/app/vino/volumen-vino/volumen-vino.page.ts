import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import * as $ from 'jquery';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import * as CryptoJS from 'crypto-js';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-volumen-vino',
  templateUrl: './volumen-vino.page.html',
  styleUrls: ['./volumen-vino.page.scss'],
})
export class VolumenVinoPage implements OnInit {

  showSpinner: boolean = true;
  intervalFunction : any;

  constructor(private navegacion : Router, private translate : TranslateService) { 
    this.translate.use(localStorage.getItem('idioma'));
  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.graficaVolumen();
  }

  ionViewDidLeave() {
    clearInterval(this.intervalFunction);
  }

  graficaVolumen() { 
    var ultimox, ultimoy;
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
        let volumen = [];
        $.each(datosGrafica, function (key, value) {
          var sixHoursInMilliseconds = 6 * 60 * 60 * 1000;
          var newTimestamp = datosGrafica[key].fecha - sixHoursInMilliseconds;
          datosGrafica[key].fecha = newTimestamp;
          if (value.fecha) { datosGrafica[key].fecha = parseInt(value.fecha); }
          if (value.volumen) { datosGrafica[key].volumen = parseFloat(value.volumen); }

          volumen.push([value.fecha, value.volumen]);
        }); 
   chart = Highcharts.chart('volumen',{
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
      text : 'Valores',
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
    name: 'Volumen',
    type : "spline",
    // yAxis : 0,
    data: volumen,
    color : '#ff14ff'
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
          var updateFecha = parseInt(UltimosDatos[0].fecha);
          var updateVolumen = parseFloat(UltimosDatos[0].volumen);
          if ((getx() != updateFecha) && (gety() != updateVolumen)) {
            chart.series[0].addPoint([updateFecha,updateVolumen]);
          }
        }
    }});
    }, 60000);
    function getx(){return ultimox;}
    function gety(){return ultimoy;}
    }

}
