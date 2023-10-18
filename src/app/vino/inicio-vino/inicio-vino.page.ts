import { Component, OnInit } from '@angular/core';
import { AlertController, IonicModule, MenuController, NavController, NavParams} from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import * as CryptoJS from 'crypto-js';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio-vino',
  templateUrl: './inicio-vino.page.html',
  styleUrls: ['./inicio-vino.page.scss'],
})
export class InicioVinoPage implements OnInit {

  user: string;
  numberOfCards: number;

  constructor(private menu : MenuController, private translate : TranslateService, private alertController: AlertController, private router : Router) {
    this.translate.use(localStorage.getItem('idioma'));
    this.user = localStorage.getItem('empresa');
    const bytes = CryptoJS.AES.decrypt(this.user, environment.SECRET_KEY);
    const datoDesencriptado = bytes.toString(CryptoJS.enc.Utf8);
    if (datoDesencriptado === '5') {
      this.numberOfCards = 4;
    }
  }

  ngOnInit() {
  }

  openMenu1() {
    this.menu.enable(true, 'second');
    this.menu.open();
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
          localStorage.removeItem('idTina');
          localStorage.removeItem('empresa');
          localStorage.removeItem('token');
          localStorage.removeItem('categoria');
          localStorage.setItem('routLast', '/login');
            {
              this.router.navigate(['login']); 
            }
        }
      }
    ]
  }); 
  confirm.present(); 
}

idTina(i: string) {
  localStorage.setItem('idTina', i);
}

opcionCatalogo(opcion) {
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

}
