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
  baseUrl3 = environment.apiDatosGenerales
  constructor(private http : HttpClient) { }

  getSensores(): Observable<any>{ 
    let token = localStorage.getItem('token');
    let idTina = localStorage.getItem('idTina');
    let empresa = localStorage.getItem('empresa');
    let categoria = localStorage.getItem('categoria');
    const bytes = CryptoJS.AES.decrypt(empresa, environment.SECRET_KEY);
    const datoDesencriptado = bytes.toString(CryptoJS.enc.Utf8);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    const requestOptions = { headers: headers };
    var parseo = {'idTina' : idTina, 'empresa' : datoDesencriptado, 'categoria' : categoria};
    return this.http.post<any>(`${this.baseUrl}`, JSON.stringify(parseo), requestOptions);
  }
  
  getUltimoSensor() : Observable<any>{
    let token = localStorage.getItem('token');
    let idTina = localStorage.getItem('idTina');
    let empresa = localStorage.getItem('empresa');
    let categoria = localStorage.getItem('categoria');
    const bytes = CryptoJS.AES.decrypt(empresa, environment.SECRET_KEY);
    const datoDesencriptado = bytes.toString(CryptoJS.enc.Utf8);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    const requestOptions = { headers: headers };
    var parseo = {'tinaIndividual' : idTina, 'empresa' : datoDesencriptado, 'Consultar' : 1, "categoria" : categoria};
    return this.http.post<any>(`${this.baseUrl}`, JSON.stringify(parseo), requestOptions);
  }

  alertaTemperatura(): Observable<any>{
    let token = localStorage.getItem('token');
    let empresa = localStorage.getItem('empresa');
    let categoria = localStorage.getItem('categoria');
    const bytes = CryptoJS.AES.decrypt(empresa, environment.SECRET_KEY);
    const datoDesencriptado = bytes.toString(CryptoJS.enc.Utf8);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    const requestOptions = { headers: headers };
    var parseo = {'tipoAlerta' : 1, 'empresa' : datoDesencriptado, 'categoria' : categoria};
    return this.http.post<any>(`${this.baseUrl2}`, JSON.stringify(parseo), requestOptions);
    // return this.http.get(`${this.baseUrl2}?tipoAlerta=1`);
  }
  
  alertaPH(): Observable<any>{
    let token = localStorage.getItem('token');
    let empresa = localStorage.getItem('empresa');
    let categoria = localStorage.getItem('categoria');
    const bytes = CryptoJS.AES.decrypt(empresa, environment.SECRET_KEY);
    const datoDesencriptado = bytes.toString(CryptoJS.enc.Utf8);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    const requestOptions = { headers: headers };
    var parseo = {'tipoAlerta' : 2, 'empresa' : datoDesencriptado, 'categoria' : categoria};
    return this.http.post<any>(`${this.baseUrl2}`, JSON.stringify(parseo), requestOptions);
    // return this.http.get(`${this.baseUrl2}?tipoAlerta=2`);
  }

  alertaBrix(): Observable<any>{
    let token = localStorage.getItem('token');
    let empresa = localStorage.getItem('empresa');
    let categoria = localStorage.getItem('categoria');
    const bytes = CryptoJS.AES.decrypt(empresa, environment.SECRET_KEY);
    const datoDesencriptado = bytes.toString(CryptoJS.enc.Utf8);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    const requestOptions = { headers: headers };
    var parseo = {'tipoAlerta' : 3, 'empresa' : datoDesencriptado, 'categoria' : categoria};
    return this.http.post<any>(`${this.baseUrl2}`, JSON.stringify(parseo), requestOptions);
    // return this.http.get(`${this.baseUrl2}?tipoAlerta=3`);
  }

  getLimites(){
    let tine = localStorage.getItem('idTina');
    let token = localStorage.getItem('token');
    let empresa = localStorage.getItem('empresa');
    let categoria = localStorage.getItem('categoria');
    const bytes = CryptoJS.AES.decrypt(empresa, environment.SECRET_KEY);
    const datoDesencriptado = bytes.toString(CryptoJS.enc.Utf8);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    const requestOptions = { headers: headers };
    var parseo = {'tine' : tine, 'empresa' : datoDesencriptado, 'categoria' : categoria};
    return this.http.post<any>(`${this.baseUrl}`, JSON.stringify(parseo), requestOptions);
  }

  datosGenerales(): Observable<any>{
    // let token = localStorage.getItem('token');
    let empresa = localStorage.getItem('empresa');
    // let categoria = localStorage.getItem('categoria');
    const bytes = CryptoJS.AES.decrypt(empresa, environment.SECRET_KEY);
    const datoDesencriptado = bytes.toString(CryptoJS.enc.Utf8);
    // const headers = new HttpHeaders({
    //   'Content-Type': 'application/json',
    //   'Authorization': `Bearer ${token}`
    // });
    // const requestOptions = { headers: headers };
    var parseo = {'empresa' : datoDesencriptado};
    return this.http.post<any>(`${this.baseUrl3}`, JSON.stringify(parseo));
    // return this.http.get(`${this.baseUrl2}?tipoAlerta=3`);
  }
  
}
