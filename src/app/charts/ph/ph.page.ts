import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import * as $ from 'jquery';
import { TranslateService } from '@ngx-translate/core';
import * as CryptoJS from 'crypto-js';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-ph',
  templateUrl: './ph.page.html',
  styleUrls: ['./ph.page.scss'],
})
export class PhPage implements OnInit {

  showSpinner = true;

  constructor(private translate : TranslateService) {
    this.translate.use(localStorage.getItem('idioma'));
   }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.graficapH();
  }

  ionViewDidLeave() {
  }

    graficapH() {
      var ultimox, ultimoz, ultimophMayor, ultimophMenor;
      var chart;
      let idTina = localStorage.getItem('idTina');
      let tinaIndividual = localStorage.getItem('idTina');
      let tequilera = localStorage.getItem('tequilera');
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
                  text: 'Values pH',
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
                  text: 'Werte pH',
                },
              });
            }
            ch.redraw();
          });
        }
      },1000);

      const bytes = CryptoJS.AES.decrypt(tequilera, environment.SECRET_KEY);
      const datoDesencriptado = bytes.toString(CryptoJS.enc.Utf8);

      var parseo = {'idTina' : idTina, 'tequilera' : datoDesencriptado};
      var parseo2 = {'tinaIndividual' : tinaIndividual, 'tequilera' : datoDesencriptado, 'Consultar' : Consultar};
      
      $.ajax({ 
        url: 'https://www.ininbio.com/pruebasLocalesFull/datos_Grafica.php',
        headers: {"Authorization": "Bearer "+token, "Content-Type" : "application/json"},
        type: "POST",
        dataType: "json",
        data : JSON.stringify(parseo),
        success: function (datosGrafica) {
        document.getElementById('cargador').style.display = 'none';
      let pH = [];
      let phMayor = [];
      let phMenor = [];
      $.each(datosGrafica, function(key,value){
      if (value.x){datosGrafica[key].x = parseInt(value.x);}
      if (value.z) {datosGrafica[key].z = parseFloat(value.z);}
      if (value.phMayor) { datosGrafica[key].phMayor = parseFloat(value.phMayor); }
      if (value.phMenor) { datosGrafica[key].phMenor = parseFloat(value.phMenor); }
  
      pH.push([value.x, value.z]);
      phMayor.push([value.x, value.phMayor]);
      phMenor.push([value.x, value.phMenor]);
      }); 
    
     chart = Highcharts.chart('pH',{
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
        text : 'Valores pH',
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
      name: 'pH',
      type : "spline",
      yAxis : 0,
      data: pH,
      color : '#14faff'
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
      }]
      });
      }
      });
      setInterval(function () {
        $.post({
          url : 'https://www.ininbio.com/pruebasLocalesFull/datos_Grafica.php',
          headers: {"Authorization": "Bearer "+token, "Content-Type" : "application/json"},
          type : 'POST',
          data : JSON.stringify(parseo2),
          dataType : 'json',
          success : 
          function (UltimosDatos) {
          if (UltimosDatos.length != 0) {
          var varlocalx = parseInt(UltimosDatos[0].x);
          var varlocalz = parseFloat(UltimosDatos[0].z);
          var varlocalphMayor = parseFloat(UltimosDatos[0].phMayor);
          var varlocalphMenor = parseFloat(UltimosDatos[0].phMenor);
  
          if ((getx() != varlocalx) && (getz() != varlocalz) && (getphMayor() != varlocalphMayor) && (getphMenor() != varlocalphMenor)) {
  
            chart.series[0].addPoint([varlocalx, varlocalz]);
            chart.series[1].addPoint([varlocalx, varlocalphMayor]);
            chart.series[2].addPoint([varlocalx, varlocalphMenor]);
          }
        }
      }});
      }, 60000);
      function getx(){return ultimox;}
      function getz(){return ultimoz;}
      function getphMayor() { return ultimophMayor; }
      function getphMenor() { return ultimophMenor; }
      }

    refrescar(){
      window.location.assign('/charts');
    }
}
