import { HttpClient} from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Usuario } from '../interfaces/usuario.interface';
import { Proyecto } from '../interfaces/proyecto.interface';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private httpClient = inject(HttpClient)
  private baseUrl: string;


  constructor() {
    this.baseUrl = 'http://localhost:3000/api/usuarios'
  };

  getAll(): Promise<Usuario[] | any> {
    return firstValueFrom(
      this.httpClient.get<Usuario[] | any>(this.baseUrl))
  };

  create(formValue: any): Promise<Usuario | any> {
    return firstValueFrom(
      this.httpClient.post<Usuario | any>(this.baseUrl, formValue)
    );
  };
  getById(usuarioId: number): Promise<Usuario | any> {
    return firstValueFrom(
      this.httpClient.get<Usuario | any>(`${this.baseUrl}/${usuarioId}`)
    );
  };
  update(usuarioId: number, formValue: any): Promise<Usuario | any> {
    return firstValueFrom(
      this.httpClient.put<Usuario | any>(`${this.baseUrl}/editar/${usuarioId}`, formValue)
    );
  };
  deleteUser(usuarioId: number): Promise<Usuario | any> {
    return firstValueFrom(
      this.httpClient.delete<Usuario | any>(`${this.baseUrl}/${usuarioId}`)
    );
  };

  getProyectos(usuarioId: number, fecha: Date): Promise<Proyecto | any> {
    return firstValueFrom(
      this.httpClient.get<Proyecto | any>(`${this.baseUrl}/${usuarioId}/${fecha}`)
    );
  }

  getLoginUser(formValue: any): Promise<Usuario | any> {
    return firstValueFrom(
      this.httpClient.post<Usuario | any>(`${this.baseUrl}/login/user`, formValue)
    );
  }
  getByprofile(): Promise<Usuario | any> {
    return firstValueFrom(
      this.httpClient.get<Usuario | any>(`${this.baseUrl}/profile`)
    );
  };

  isLoggedUser(): boolean {
    return localStorage.getItem('user_token') ? true : false

  }



  getSumHora(usuarios_Id: number, fecha: any): any {
    const body = {
      "usuarios_Id": usuarios_Id,
      "fecha": fecha
    }

    return firstValueFrom(
      this.httpClient.post<any>(`${this.baseUrl}/getTime`, body)
    )
  }

}



