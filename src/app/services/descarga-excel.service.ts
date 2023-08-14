import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import * as XLSX from 'xlsx';
// import { ChartsPage } from '../charts/charts.page';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class DescargaExcelService {

  baseUrl = environment.apiExcel
  baseUrl1 = environment.apiMezcalPDF

  constructor(private http : HttpClient) { }

  async exportToExcel(data, filename) {
    {
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(data);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, filename);
    XLSX.writeFile(wb, filename + '.xlsx');
    }
  }

  generarExcel(primerFecha, segundaFecha){
    let num_tina = localStorage.getItem('idTina');
    let idioma = localStorage.getItem('idioma');
    let tequilera = localStorage.getItem('tequilera');
    let token = localStorage.getItem('token');
    const bytes = CryptoJS.AES.decrypt(tequilera, environment.SECRET_KEY);
    const datoDesencriptado = bytes.toString(CryptoJS.enc.Utf8);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.get(`${this.baseUrl}/generarExcel.php?idTina=`+num_tina+`&tequilera=`+datoDesencriptado+`&idioma=`+idioma
    +`&primer=`+primerFecha+`&segunda=`+segundaFecha,
    {headers : headers, observe : 'response', responseType: 'blob'});
  }

  mezcalPDF(){
    return this.http.get(`${this.baseUrl1}/Catalogo_Mezcal.php`,{observe : 'response', responseType: 'blob'});
  }

}
