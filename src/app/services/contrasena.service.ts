import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Contrasena } from '../models/contrasena';

@Injectable({
  providedIn: 'root',
})
export class ContrasenaService {
  baseUrl = environment.apiRestContrasena;

  constructor(private http: HttpClient) {}

  restContra(registros: Contrasena) {
    return this.http.put(`${this.baseUrl}/restablecerContra.php`, registros);
  }
  
  restPassword(correo: Contrasena) {
    return this.http.post(`${this.baseUrl}`, correo, { responseType: 'text' });
  }
}
