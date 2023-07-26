import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Proyecto } from '../interfaces/proyecto.interface';
import { firstValueFrom } from 'rxjs';





@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  private httpClient = inject(HttpClient)
  private baseUrl: string;

  constructor() {
    this.baseUrl = 'http://localhost:3000/api/proyectos'
  }

  getProyectos(): Promise<Proyecto[] | any> {
    return firstValueFrom(
      this.httpClient.get<Proyecto[] | any>(this.baseUrl)
    )
  }

  getRegistro(idUsuario: number, idProyecto: number, mes: number): Promise<[]> {
    return firstValueFrom(
      this.httpClient.get<[]>(`${this.baseUrl}/${idUsuario}/${idProyecto}/${mes}`)
    )

  }

}
