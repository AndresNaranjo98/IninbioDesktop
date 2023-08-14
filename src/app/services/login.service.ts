import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, BehaviorSubject } from 'rxjs';
import { Login } from '../models/login';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl = environment.apiLogin
  authSubject  =  new  BehaviorSubject(false);

  constructor(private http : HttpClient) {}

  login(credentials : Login) : Observable<any>{
    return this.http.post<any>(`${this.baseUrl}/obtenerUsuarios.php`, credentials);
    }
  
  obtenerUsuarios(credentials : Login) : Observable<any>{
      return this.http.post<any>(`${this.baseUrl}/obtenerUsuarios.php`, credentials);  
    
    }

}
