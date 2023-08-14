import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import {
  LoadingController,
  AlertController,
  NavController,
} from '@ionic/angular';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Login } from '../models/login';
import { Storage } from '@ionic/storage';
import { Contrasena } from '../models/contrasena';
import { ContrasenaService } from '../services/contrasena.service';
import { TranslateService } from '@ngx-translate/core';
import { TranslateConfigService } from '../services/translate-config.service';
import * as CryptoJS from 'crypto-js';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  datoSensores: Login[];
  registros: Contrasena = {
    contrasena: null,
    nombre_usuario: null,
    correo: null
  }
  langs: string[] = ['English, Español, Aleman'];
  private language: string = this.translate.currentLang;
  selectedLanguage: string;

  constructor(
    private servicio: LoginService,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private router: Router,
    private formBuilder: FormBuilder,
    private navCtrl: NavController,
    private storage: Storage,
    private contra: ContrasenaService,
    private translate: TranslateService,
    private translateConfigService: TranslateConfigService
  ) {
    this.storage.create();
    this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
    this.translate.use(localStorage.getItem('idioma'));
  }

  languageChanged() {
    this.translateConfigService.setLanguage(this.selectedLanguage);
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      nombre_usuario: ['', [Validators.required, Validators.minLength(2)]],
      contrasena: ['', [Validators.required, Validators.minLength(2)]],
    });
  }

  submit: string = 'password';
  passwordIcon: string = 'eye-off';

  hideShowPassword() {
    this.submit = this.submit === 'text' ? 'password' : 'text';
    this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
  }

  async onSubmit() {
    const loading = await this.loadingCtrl.create({
      message: this.translate.instant('MENSAJEINICIO'),
      spinner: 'dots',
      cssClass: 'custom-loading',
    });
    await loading.present();

    this.servicio.login(this.loginForm.value).subscribe(
      async (data) => {
        let json = JSON.stringify(data);
        let response = JSON.parse(json);
        let teqEncrypt = (response.tequilera).toString();
        let secret = environment.SECRET_KEY;
        const datoEncriptado = CryptoJS.AES.encrypt(teqEncrypt, secret).toString();
        localStorage.setItem('tequilera', datoEncriptado);
        localStorage.setItem('token', response.token);
        loading.dismiss();
        this.router.navigateByUrl('/inicio');
        this.servicio.obtenerUsuarios(this.loginForm.value).subscribe(
          async (data) => {
            let json = JSON.stringify(data);
            let response = JSON.parse(json);
            const alert = await this.alertCtrl.create({
              cssClass: 'alerta',
              header: '¡' + this.translate.instant('BIENVENIDA') + this.translate.instant('ESPACIO') + response.usuario + '!',
              buttons: [
                {
                  cssClass : 'confirmacion',
                  text : 'Ok', 
                }
              ],
            });
            await alert.present();
            loading.dismiss();
          },
          (err) => {
            console.log(err);
          }
        );
      },
      async () => {
        const alert = await this.alertCtrl.create({
          message: this.translate.instant('FALLOINICIO'),
          buttons: [
            {
              cssClass : 'confirmacion',
              text : 'Ok', 
            }
          ],
        });
        await alert.present();
        loading.dismiss();
      }
    );
  }

  async restContra() {
    var EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const alert = await this.alertCtrl.create({
      cssClass: 'alerta',
      header: this.translate.instant('ALERTAOLVIDOCONTRA.HEADERALERT'),
      inputs: [
        {
          placeholder: this.translate.instant('ALERTAOLVIDOCONTRA.PLACEHOLDER'),
          type: 'email',
          name: 'correo',
          attributes: {
            autocomplete: "nope"
          },
          cssClass: 'alertDanger'
        },
      ],
      buttons: [
        {
          cssClass : 'confirmacion',
          text: this.translate.instant('ALERTAOLVIDOCONTRA.BUTONENVIAR'),
          handler: data => {
            if (
              data.correo !== null && data.correo !== '' && data.correo.match(EMAIL_REGEX)
            ) {
              this.contra.restPassword(this.registros.correo = data).subscribe(
                async data => {
                  this.confirmacion();
                },
                async () => {
                  let alert = await this.alertCtrl.create({
                    cssClass: 'alerta',
                    header: this.translate.instant('ALERTAENVIOCORREO.HEADER'),
                    subHeader: this.translate.instant('ALERTAENVIOCORREO.SUBHEADER'),
                    message: this.translate.instant('ALERTAENVIOCORREO.MESSAGE'),
                    buttons: [
                      {
                        cssClass : 'confirmacion',
                        text : 'Ok', 
                      }
                    ],
                  });
                  alert.present();
                })
            } else {
              this.validacion();
            }
          },
        },
      ],
    });

    await alert.present();
  }

  async confirmacion() {
    const alert = await this.alertCtrl.create({
      cssClass: 'alerta',
      header: this.translate.instant('ALERTAENVIOCORREO.HEADER1'),
      subHeader: this.translate.instant('ALERTAENVIOCORREO.SUBHEADER1'),
      buttons: [
        {
          cssClass : 'confirmacion',
          text : 'Ok', 
        }
      ],
    });
    await alert.present();
  }

  async validacion() {
    const alert = await this.alertCtrl.create({
      header: this.translate.instant('VALIDACIONCORREO.HEADER'),
      cssClass: 'alerta',
      subHeader: this.translate.instant('VALIDACIONCORREO.SUBHEADER'),
      buttons: [
        {
          cssClass : 'confirmacion',
          text : 'Ok', 
        }
      ],
    });
    await alert.present();
  }

}
