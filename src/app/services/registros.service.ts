import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Usuarios } from '../models/usuarios';

@Injectable({
  providedIn: 'root'
})
export class RegistrosService {
  baseUrl = environment.apiUsuarios 

  constructor(private http: HttpClient) { }


  addUsuario(registros: Usuarios) {
    return this.http.post(`${this.baseUrl}/principal.php`, registros);
  }

  getUsuarios() {
    return this.http.get(`${this.baseUrl}/getAll.php`);
  }

}