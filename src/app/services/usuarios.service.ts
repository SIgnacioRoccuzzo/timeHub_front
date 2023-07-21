import { HttpClient, HttpHeaders } from '@angular/common/http';
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
  };


  getAll(): Promise<Usuario[] | any> {
    return firstValueFrom(
      this.httpClient.get<Usuario[] | any>(this.baseUrl
      ))
  };

  //(formulario añadir nuevo usuario terminado)
  create(formValue: any): Promise<Usuario | any> {
    return firstValueFrom(
      this.httpClient.post<Usuario | any>(this.baseUrl, formValue, this.createHeaders())
    );
  };
  getById(idUsuario: number): Promise<Usuario | any> {
    return firstValueFrom(
      this.httpClient.get<Usuario | any>(`${this.baseUrl}/${idUsuario}`, this.createHeaders())
    );
  };
  update(idUsuario: number, formValue: any): Promise<Usuario | any> {
    return firstValueFrom(
      this.httpClient.put<Usuario | any>(`${this.baseUrl}/${idUsuario}`, formValue, this.createHeaders())
    );
  };
  deleteUser(idUsuario: number): Promise<Usuario | any> {
    return firstValueFrom(
      this.httpClient.delete<Usuario | any>(`${this.baseUrl}/${idUsuario}`, this.createHeaders())
    );
  };

  getProyectos(idUsuario: number, fecha: string): Promise<Proyecto | any> {
    return firstValueFrom(
      this.httpClient.get<Proyecto | any>(`${this.baseUrl}/${idUsuario}/fecha/${fecha}`, this.createHeaders())
    );
  }
  getLoginUser(formValue: any): Promise<Usuario | any> {
    return firstValueFrom(
      this.httpClient.post<Usuario | any>(`${this.baseUrl}/login/user`, formValue)
    );
  }
  getByprofile(): Promise<Usuario | any> {
    return firstValueFrom(
      this.httpClient.get<Usuario | any>(`${this.baseUrl}/perfil`, this.createHeaders())
    );
  };

  createHeaders() {
    return {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem('user_token')!
      })
    }
  }

  isLoggedUser(): boolean {
    return localStorage.getItem('user_token') ? true : false

  }

}

