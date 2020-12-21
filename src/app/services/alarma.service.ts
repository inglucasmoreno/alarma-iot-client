import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

const baseUrl = environment.base_url;

@Injectable({
  providedIn: 'root'
})

export class AlarmaService {

  constructor(private http: HttpClient) { }

  getAlarma(): Observable<any> {
    return this.http.get(`${baseUrl}/alarma`, {
      headers: { 'x-token': localStorage.getItem('token') }
    });
  }

  actualizarAlarma(estado: string): Observable<any> {
    return this.http.put(`${baseUrl}/alarma`, {estado},
      { headers: {'x-token': localStorage.getItem('token')} });
  }

}
