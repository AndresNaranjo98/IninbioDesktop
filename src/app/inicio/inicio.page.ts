import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { AlertController, IonicModule, MenuController, NavController, NavParams} from '@ionic/angular';
import { Login } from '../models/login';
import { LoginService } from '../services/login.service';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';
import { ChartsService } from '../services/charts.service';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@awesome-cordova-plugins/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';
import { DescargaExcelService } from '../services/descarga-excel.service';
import * as $ from 'jquery';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';
import * as CryptoJS from 'crypto-js';
import { Datos } from '../models/datosTina';
import { Sensores } from '../models/sensores';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  datosUsuario :  Login[];
  datoSensores: Sensores[];
  usuario : string;
  numberOfCards: number;
  alma : number;
  user: string;
  slideOpts = {
    initialSlide: 0,
    autoplay: 300,
    slidesPerView: 5
  };
  primerArreglo = [1, 2, 3, 4, 5, 6, 7];
  segundoArreglo = [8, 9, 10, 11, 12, 13, 14];
  tercerArreglo = [15, 16, 17, 18, 19, 20, 21];
  intervalFunction;
  items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
    { id: 4, name: 'Item 4' },
    { id: 5, name: 'Item 5' }
  ];
  jsonData : any;
  fecha : number[] = [];
  brix : number[] = [];
  alcvol : number[] = [];
  eficiencia : number[] = [];
  ph : number[] = [];
  temperatura : number[] = [];
  volumen : number[] = [];
  isMobile: boolean;

  constructor( private menu : MenuController, private servicio : LoginService, public navCtrl: NavController,
    public alertController: AlertController,private storage: Storage, private router : Router,
    private service : ChartsService, private transfer: FileTransfer, private file: File,
    private serv : DescargaExcelService, private translate : TranslateService, private platform: Platform) 
  {
    this.translate.use(localStorage.getItem('idioma'));
    this.user = localStorage.getItem('empresa');
    const bytes = CryptoJS.AES.decrypt(this.user, environment.SECRET_KEY);
    const datoDesencriptado = bytes.toString(CryptoJS.enc.Utf8);
    if (datoDesencriptado === '1') {
      this.numberOfCards = 7;
    } else if (datoDesencriptado === '2') {
      this.numberOfCards = 3;
    } else if (datoDesencriptado === '3') {
      this.numberOfCards = 21;
      this.alma = 3;
    }
    else if (datoDesencriptado === '4') {
      this.numberOfCards = 60;
    }
    console.log(this.platform);
    this.isMobile = this.platform.is('mobile');
  }

    fileTransfer: FileTransferObject = this.transfer.create();

    opcionCatalogo(opcion){
      if(opcion == "mezcal"){
        this.mezcalPDF();
      } 
      else if(opcion == "tequila"){
        this.tequilaPDF();
      }
      else if(opcion == "vino"){
        this.vinoPDF();
      }    
    }

    ionViewWillEnter(): void {
      //this.contador = true;
      this.alertaTemperatura();
      this.alertapH();
      this.alertaBrix();
      //this.cerrarSesion();
      //this.cargarDatos();
      //this.comprobarBrix();
    }

  mezcalPDF() {
    let nombre = "Catálogo Mezcal";
    let descarga = document.createElement('a');
    descarga.href = 'http://3.138.161.216:80/Catalogos/Catalogo_Mezcal.pdf';
    descarga.target = '_blank';
    descarga.download = nombre;
    document.body.appendChild(descarga);
    descarga.click();
    document.body.removeChild(descarga); 
  }

  tequilaPDF() {
    let nombre = "Catálogo Tequila";
    let descarga = document.createElement('a');
    descarga.href = 'http://3.138.161.216:80/Catalogos/Catalogo_Tequila.pdf';
    descarga.target = '_blank';
    descarga.download = nombre;
    document.body.appendChild(descarga);
    descarga.click();
    document.body.removeChild(descarga);
  }

  vinoPDF() {
    let nombre = "Catálogo Vino";
    let descarga = document.createElement('a');
    descarga.href = 'http://3.138.161.216:80/Catalogos/Catalogo_Vino.pdf';
    descarga.target = '_blank';
    descarga.download = nombre;
    document.body.appendChild(descarga);
    descarga.click();
    document.body.removeChild(descarga);
  }
  
  openMenu1(){
    this.menu.enable(true, 'second');
    this.menu.open();
    }

  async ngOnInit() {
    this.usuario = localStorage.getItem('empresa');
    this.datosXTina();
  }

  async showConfirm() {
    const confirm = await this.alertController.create({
    cssClass : 'alerta',
    header: this.translate.instant('CERRARSESION.HEADER'),
    message: this.translate.instant('CERRARSESION.MENSAJE'),
    buttons: [
      {
        cssClass : 'confirmacion',
        text: this.translate.instant('CERRARSESION.NO'),
        handler: () => {
          this.router.navigate(['inicio']);
        }
      },
      {
        cssClass : 'confirmacion',
        text:  this.translate.instant('CERRARSESION.SI'),
        handler: async () => {
              localStorage.removeItem('tequilera');
              localStorage.removeItem('token');
              localStorage.removeItem('idTina');
            {
              this.router.navigate(['login']); 
           }
          
        }
      }
    ]
  }); 
  confirm.present(); 
}

comprobarBrix(){
  this.service.getSensores().subscribe(
    async data=>{
      let json = JSON.stringify(data);
      let response = JSON.parse(json);
      const ultimo = response[response.length - 1];
      const penultimo = response[response.length - 2];
      if(ultimo['w'] === penultimo['w']){
        let alert = await this.alertController.create({
          cssClass: 'alerta',
          header: 'El °Brix Actual Es De: '+penultimo['w']+'° Y No A Cambiado Hace 2 Horas',
          message: 'Se Recomienda Verificar Su Fermentación',
          buttons: [
            {
              cssClass : 'confirmacion',
              text : 'Ok', 
            }
          ],
          });
          alert.present();
      }
  },err=>{
      console.log(err);
    }
  );
}

cargarDatos(){
  this.service.getUltimoSensor().subscribe(
    async data=>{
      let json = JSON.stringify(data);
      let response = JSON.parse(json);
      let dato : [];
      for(dato of response)
     if(dato['z'] >= 4.6 || dato['z'] <= 4.1){
      let alert = await this.alertController.create({
      cssClass: 'alerta',
      header: 'El pH Actual Es: '+dato['z'],
      message: 'Se Recomienda Verificar Sus Valores',
      buttons: [
        {
          cssClass : 'confirmacion',
          text : 'Ok', 
        }
      ],
      });
      alert.present();
    } if(dato['y'] >= 37 || dato['y'] <= 30){
      let alert = await this.alertController.create({
      cssClass: 'alerta',
      header: 'La Temperatura Actual Es: '+dato['y']+'°C',
      message: 'Se Recomienda Verificar Su Fermentación',
      buttons: [
        {
          cssClass : 'confirmacion',
          text : 'Ok', 
        }
      ],
      });
      alert.present();
    } 
  },err=>{
      console.log(err);
    }
  );
}

alertaTemperatura() {
  this.service.alertaTemperatura().subscribe(
    async data => {
      let json = JSON.stringify(data);
      let response = JSON.parse(json);
      if(response != null){
      let alert = await this.alertController.create({
        cssClass: 'alerta',
        header: this.translate.instant('ALERTASVALORES.HEADERTEMP1') +
        this.translate.instant('ESPACIO') + 
        response + 
        this.translate.instant('ESPACIO') +
        this.translate.instant('ALERTASVALORES.HEADERTEMP2'),
        message: this.translate.instant('ALERTASVALORES.MENSAJETEMP'),
        buttons: [
          {
            cssClass : 'confirmacion',
            text : 'Ok', 
          }
        ],
      });
      alert.present();
    }
    });
}

alertapH() {
  this.service.alertaPH().subscribe(
    async data => {
      let json = JSON.stringify(data);
      let response = JSON.parse(json);
      if(response != null){
      let alert = await this.alertController.create({
        cssClass: 'alerta',
        header: this.translate.instant('ALERTASVALORES.HEADERPH1') +
        this.translate.instant('ESPACIO')
        + response
        + this.translate.instant('ESPACIO') 
        + this.translate.instant('ALERTASVALORES.HEADERPH2'),
        message: this.translate.instant('ALERTASVALORES.MENSAJEPH'),
        buttons: [
          {
            cssClass : 'confirmacion',
            text : 'Ok', 
          }
        ],
      });
      alert.present();  
    }
    });
}

alertaBrix() {
  this.service.alertaBrix().subscribe(
    async data => {
      let json = JSON.stringify(data);
      let response = JSON.parse(json);
      if(response != null){
      let alert = await this.alertController.create({
        cssClass: 'alerta',
        header: this.translate.instant('ALERTASVALORES.HEADERBRIX1')
        + this.translate.instant('ESPACIO')
        + response
        + this.translate.instant('ESPACIO')
        + this.translate.instant('ALERTASVALORES.HEADERBRIX2'),
        message: this.translate.instant('ALERTASVALORES.MENSAJEBRIX'),
        buttons: [
          {
            cssClass : 'confirmacion',
            text : 'Ok', 
          }
        ],
      });
      alert.present();
    }
    });
}

  idTina(i: string) {
    localStorage.setItem('idTina', i);
  }

  datosXTina() {
    this.service.datosGenerales().subscribe(
      async data => {
        let json = JSON.stringify(data);
        let response = JSON.parse(json);
        // var sixHoursInMilliseconds = 6 * 60 * 60 * 1000;
        response.forEach((iterador) => {
          this.fecha.push(iterador[0].fecha);
          this.brix.push(iterador[0].brix);
          this.alcvol.push(iterador[0].alcvol);
          this.eficiencia.push(iterador[0].eficiencia);
          this.temperatura.push(iterador[0].temperatura);
          this.ph.push(iterador[0].pH);
          this.volumen.push(iterador[0].volumen);
          // console.log(iterador[0]["fecha"]);
        });
        console.log(this.fecha);
        // console.log(response);
      });
  }

}
