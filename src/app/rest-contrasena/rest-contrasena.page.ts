import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContrasenaService } from '../services/contrasena.service';
import { Validators,FormBuilder,FormGroup } from "@angular/forms";
import { Contrasena } from '../models/contrasena';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-rest-contrasena',
  templateUrl: './rest-contrasena.page.html',
  styleUrls: ['./rest-contrasena.page.scss'],
})
export class RestContrasenaPage implements OnInit {

  ionicForm: FormGroup;
  isSubmitted = false;
  responseData : any;
  registros : Contrasena = {
    contrasena : null,
    nombre_usuario : null
  }

  constructor(private usuarioService: ContrasenaService,
    private router: Router, private formBuilder: FormBuilder, private alertController: AlertController) { }

  ngOnInit() {
    this.ionicForm = this.formBuilder.group({
      contrasena: ['', [Validators.required, Validators.minLength(2)]],
      nombre_usuario: ['', [Validators.required, Validators.minLength(2)]]
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

  contrasena = new Contrasena("","");

  onSubmit() {
    this.registros = {
      contrasena : this.ionicForm.value['contrasena'],
      nombre_usuario : this.ionicForm.value['nombre_usuario']
    }
    this.isSubmitted = true;
    this.usuarioService.restContra(this.registros).subscribe(async (datos : any) => {
      
        let alert = await this.alertController.create({
          cssClass: 'alerta',
          header: 'Confirmación',
          message: 'Su Contraseña Fué Restablecida Correctamente',
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
          header: 'Error',
          message: 'El Usuario Es Incorrecto',
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
  }  

