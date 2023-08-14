import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslateConfigService {

  constructor(
    private translate: TranslateService
  ) { }

  getDefaultLanguage(){
    let language = this.translate.getBrowserLang();
    this.translate.setDefaultLang(language);
    localStorage.setItem('idioma',language);
    return language;
  }

  setLanguage(setLang) {
    localStorage.setItem('idioma',setLang);
    this.translate.use(localStorage.getItem('idioma'));
  }

}