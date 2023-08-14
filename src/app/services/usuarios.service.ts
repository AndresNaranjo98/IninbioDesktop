import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

    public id: number;
    public nombre: string;
    public apellidos: string;
    public correo: string;
    public contrasena: string;
    public nombre_usuario: string;

    constructor(id:number,nombre: string,apellidos:string,correo:string,
                contrasena:string, nombre_usuario:string) {
      this.id = id;
      this.nombre = nombre;
      this.apellidos = apellidos;
      this.correo = correo;
      this.contrasena = contrasena;
      this.nombre_usuario = nombre_usuario;
      }
}
