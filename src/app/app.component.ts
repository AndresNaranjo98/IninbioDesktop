import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
// import { Network } from '@awesome-cordova-plugins/network/ngx';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import {
  TranslateModule,
  TranslateLoader,
  TranslateService,
} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private platform: Platform, private translate : TranslateService) {
    this.InitializeApp();
  }
  InitializeApp() {
    this.platform.ready().then(() => {
      this.translate.addLangs(['English, Español, Aleman']);
    });
  }
}
