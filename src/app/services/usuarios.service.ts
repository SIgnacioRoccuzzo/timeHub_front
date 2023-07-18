import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Usuario } from '../interfaces/usuario.interface';
import { Proyecto } from '../interfaces/proyecto.interface';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private httpClient = inject(HttpClient)
  private baseUrl: string
  constructor() {
    this.baseUrl = 'http://localhost:3000/api/usuarios'
  }

  getById(idUsuario: number): Promise<Usuario | any> {
    return firstValueFrom(
      this.httpClient.get<Usuario | any>(`${this.baseUrl}/${idUsuario}`)
    );
  }

  create(formValue: any): Promise<Usuario | any> {
    return firstValueFrom(
      this.httpClient.post<Usuario | any>(this.baseUrl, formValue)
    );
  }

  getProyectos(idUsuario: number, fecha: string): Promise<Proyecto | any> {
    return firstValueFrom(
      this.httpClient.get<Proyecto | any>(`${this.baseUrl}/${idUsuario}/fecha/${fecha}`)
    );
  }

}
