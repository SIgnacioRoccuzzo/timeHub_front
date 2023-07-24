import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';

import { Proyecto } from '../interfaces/proyecto.interface';

@Injectable({
  providedIn: 'root'
})
export class RegistroHorasService {


  private httpClient = inject(HttpClient);

  private baseUrl: string


  constructor() {

    this.baseUrl = 'http://localhost:3000/api/usuarios'
  }

  getByDate(idUsuario: number, fecha: Date): Promise<Proyecto | any> {
    return firstValueFrom(
      this.httpClient.get<Proyecto | any>(`${this.baseUrl}/${idUsuario}/fecha/${fecha}`)
    );
  }
}





