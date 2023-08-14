import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, MenuController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { Usuarios } from '../models/usuarios';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {

  datoUsuario : Usuarios[];

  constructor(private menu : MenuController, private alertController: AlertController,
    private storage: Storage, private router : Router, private servicio : LoginService,) { }

  openMenu(){
  this.menu.enable(true, 'first');
  this.menu.open();
  }

 async ngOnInit() {
    await this.storage.create();
  }

  async showConfirm() {
    const confirm = await this.alertController.create({
      header: 'Cerrar Sesión',
      message: '¿Desea Salir De La Aplicación?',
      buttons: [
        {
          cssClass : 'confirmacion',
          text: 'No',
          handler: () => {
            this.router.navigate(['principal']);
          }
        },
        {
          text: 'Sí',
          handler: async () => {
           localStorage.clear()
              {
                this.router.navigate(['login']); 
             }
            
          }
        }
      ]
    }); 
    confirm.present(); 
  }
/*
  cargarDatos(){
    this.servicio.obtenerUsuarios.subscribe(
      data=>{
        let json = JSON.stringify(data);
        let response = JSON.parse(json);
        this.datoUsuario = response;
          }
      ,err=>{
        console.log(err);
      }
    );
  }
*/
}
