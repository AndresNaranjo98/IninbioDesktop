import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class ChartsService {

  baseUrl = environment.apiSensores
  baseUrl2 = environment.apiAlertas
  constructor(private http : HttpClient) { }

  getSensores(): Observable<any>{ 
    let token = localStorage.getItem('token');
    let idTina = localStorage.getItem('idTina');
    let tequilera = localStorage.getItem('tequilera');
    const bytes = CryptoJS.AES.decrypt(tequilera, environment.SECRET_KEY);
    const datoDesencriptado = bytes.toString(CryptoJS.enc.Utf8);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    const requestOptions = { headers: headers };
    var parseo = {'idTina' : idTina, 'tequilera' : datoDesencriptado};
    return this.http.post<any>(`${this.baseUrl}`, JSON.stringify(parseo), requestOptions);
  }
  
  getUltimoSensor() : Observable<any>{
    let token = localStorage.getItem('token');
    let idTina = localStorage.getItem('idTina');
    let tequilera = localStorage.getItem('tequilera');
    const bytes = CryptoJS.AES.decrypt(tequilera, environment.SECRET_KEY);
    const datoDesencriptado = bytes.toString(CryptoJS.enc.Utf8);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    const requestOptions = { headers: headers };
    var parseo = {'tinaIndividual' : idTina, 'tequilera' : datoDesencriptado, 'Consultar' : 1};
    return this.http.post<any>(`${this.baseUrl}`, JSON.stringify(parseo), requestOptions);
  }

  alertaTemperatura(): Observable<any>{
    let token = localStorage.getItem('token');
    let tequilera = localStorage.getItem('tequilera');
    const bytes = CryptoJS.AES.decrypt(tequilera, environment.SECRET_KEY);
    const datoDesencriptado = bytes.toString(CryptoJS.enc.Utf8);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    const requestOptions = { headers: headers };
    var parseo = {'tipoAlerta' : 1, 'tequilera' : datoDesencriptado};
    return this.http.post<any>(`${this.baseUrl2}`, JSON.stringify(parseo), requestOptions);
    // return this.http.get(`${this.baseUrl2}?tipoAlerta=1`);
  }
  
  alertaPH(): Observable<any>{
    let token = localStorage.getItem('token');
    let tequilera = localStorage.getItem('tequilera');
    const bytes = CryptoJS.AES.decrypt(tequilera, environment.SECRET_KEY);
    const datoDesencriptado = bytes.toString(CryptoJS.enc.Utf8);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    const requestOptions = { headers: headers };
    var parseo = {'tipoAlerta' : 2, 'tequilera' : datoDesencriptado};
    return this.http.post<any>(`${this.baseUrl2}`, JSON.stringify(parseo), requestOptions);
    // return this.http.get(`${this.baseUrl2}?tipoAlerta=2`);
  }

  alertaBrix(): Observable<any>{
    let token = localStorage.getItem('token');
    let tequilera = localStorage.getItem('tequilera');
    const bytes = CryptoJS.AES.decrypt(tequilera, environment.SECRET_KEY);
    const datoDesencriptado = bytes.toString(CryptoJS.enc.Utf8);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    const requestOptions = { headers: headers };
    var parseo = {'tipoAlerta' : 3, 'tequilera' : datoDesencriptado};
    return this.http.post<any>(`${this.baseUrl2}`, JSON.stringify(parseo), requestOptions);
    // return this.http.get(`${this.baseUrl2}?tipoAlerta=3`);
  }

  getLimites(){
    let tine = localStorage.getItem('idTina');
    let token = localStorage.getItem('token');
    let tequilera = localStorage.getItem('tequilera');
    const bytes = CryptoJS.AES.decrypt(tequilera, environment.SECRET_KEY);
    const datoDesencriptado = bytes.toString(CryptoJS.enc.Utf8);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    const requestOptions = { headers: headers };
    var parseo = {'tine' : tine, 'tequilera' : datoDesencriptado};
    return this.http.post<any>(`${this.baseUrl}`, JSON.stringify(parseo), requestOptions);
  }
  
}
