import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrosService } from '../services/registros.service';
import { Usuarios } from '../models/usuarios';
import { Validators,FormBuilder,FormGroup } from "@angular/forms";
import { AlertController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  ionicForm: FormGroup;
  isSubmitted = false;
  responseData : any;
  registros : Usuarios = {
    nombre : null,
    apellidos : null,
    correo : null,
    contrasena : null,
    nombre_usuario : null,
    id_tequilera : null
  }
  tequileras: string[] = ['Ininbio System', 'La Joya', 'Alma de Mexico'];

  constructor(private usuarioService: RegistrosService,
    private router: Router, private formBuilder: FormBuilder,private alertController: AlertController,
    private translate : TranslateService) {
      this.translate.use(localStorage.getItem('idioma'));
    } 

  ngOnInit() {
    this.ionicForm = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      apellidos: ['', [Validators.required, Validators.minLength(2)]],
      contrasena: ['', [Validators.required, Validators.minLength(2)]],
      correo: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      nombre_usuario: ['', [Validators.required, Validators.minLength(2)]],
      id_tequilera: ['', [Validators.required,Validators.minLength(2)]]
    })   
  }

  submit: string = 'password';
  passwordIcon: string = 'eye-off';
 
  hideShowPassword() {
      this.submit = this.submit === 'text' ? 'password' : 'text';
      this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
  }

  get errorControl() {
    return this.ionicForm.controls;
  }

  async onSubmit() {
    var nombreTequileraSP = this.ionicForm.value['id_tequilera'];
    const removeAccents = (str) => {
      return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }
    var nombreTequileraP = removeAccents(nombreTequileraSP);

    if(nombreTequileraP.toLowerCase() == this.tequileras[3].toLowerCase()){
    this.registros = {
      nombre : this.ionicForm.value['nombre'],
      apellidos : this.ionicForm.value['apellidos'],
      correo : this.ionicForm.value['correo'],
      contrasena : this.ionicForm.value['contrasena'],
      nombre_usuario : this.ionicForm.value['nombre_usuario'],
      id_tequilera : '1'
    }
    this.isSubmitted = true;
    this.usuarioService.addUsuario(this.registros).subscribe(async(datos : any) => {
      let alert = await this.alertController.create({
        cssClass: 'alerta',
        header: this.translate.instant('ALERTAREGISTRO.HEADER'),
        message: this.translate.instant('ALERTAREGISTRO.MESSAGE'),
        buttons: [
          {
            cssClass : 'confirmacion',
            text : 'Ok', 
          }
        ],
        });
        alert.present();
    this.router.navigate(['/login']); 
    },
    async () => {
      let alert = await this.alertController.create({
        cssClass: 'alerta',
        header: this.translate.instant('ALERTAREGISTRO.HEADER1'),
        message: this.translate.instant('ALERTAREGISTRO.MESSAGE1'),
        buttons: [
          {
            cssClass : 'confirmacion',
            text : 'Ok', 
          }
        ],
        });
        alert.present();
    })
  }
  else if(nombreTequileraP.toLowerCase() == this.tequileras[1].toLowerCase()){
    this.registros = {
      nombre : this.ionicForm.value['nombre'],
      apellidos : this.ionicForm.value['apellidos'],
      correo : this.ionicForm.value['correo'],
      contrasena : this.ionicForm.value['contrasena'],
      nombre_usuario : this.ionicForm.value['nombre_usuario'],
      id_tequilera : '2'
    }
    this.isSubmitted = true;
    this.usuarioService.addUsuario(this.registros).subscribe(async(datos : any) => {
      let alert = await this.alertController.create({
        cssClass: 'alerta',
        header: this.translate.instant('ALERTAREGISTRO.HEADER'),
        message: this.translate.instant('ALERTAREGISTRO.MESSAGE'),
        buttons: [
          {
            cssClass : 'confirmacion',
            text : 'Ok', 
          }
        ],
        });
        alert.present();
    this.router.navigate(['/login']);
    },
    async () => {
      let alert = await this.alertController.create({
        cssClass: 'alerta',
        header: this.translate.instant('ALERTAREGISTRO.HEADER1'),
        message: this.translate.instant('ALERTAREGISTRO.MESSAGE1'),
        buttons: [
          {
            cssClass : 'confirmacion',
            text : 'Ok', 
          }
        ],
        });
        alert.present();
    })
  }
  else {
    let alert = await this.alertController.create({
      cssClass: 'alerta',
      header: this.translate.instant('ALERTATEQUILERA.HEADER'),
      message: this.translate.instant('ALERTATEQUILERA.MESSAGE'),
      buttons: [
        {
          cssClass : 'confirmacion',
          text : 'Ok', 
        }
      ],
      });
      alert.present();
    console.log('ERROR');
  }
  }  
}
