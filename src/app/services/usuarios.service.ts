import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
<<<<<<< HEAD
<<<<<<< HEAD
import { Usuario } from '../interfaces/usuario.interface';
import { firstValueFrom } from 'rxjs';
=======
import { firstValueFrom } from 'rxjs';
import { Usuario } from '../interfaces/usuario.interface';
>>>>>>> 48c655e (formulario añadir nuevo usuario terminado)
=======
import { firstValueFrom } from 'rxjs';
import { Usuario } from '../interfaces/usuario.interface';
import { Proyecto } from '../interfaces/proyecto.interface';
>>>>>>> feature/perfil_usuario

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private httpClient = inject(HttpClient)
  private baseUrl: string
  constructor() {
    this.baseUrl = 'http://localhost:3000/api/usuarios'
  }
<<<<<<< HEAD

<<<<<<< HEAD
  private httpClient = inject(HttpClient);
  private baseUrl: string;



  constructor() {
    this.baseUrl = 'http://localhost:3000/api/usuarios'
  };


  getAll(): Promise<Usuario[] | any> {
    return firstValueFrom(
      this.httpClient.get<Usuario[] | any>(this.baseUrl)
    )
  };
=======
>>>>>>> 48c655e (formulario añadir nuevo usuario terminado)
  create(formValue: any): Promise<Usuario | any> {
    return firstValueFrom(
      this.httpClient.post<Usuario | any>(this.baseUrl, formValue)
    );
<<<<<<< HEAD
  };
  getById(idUsuario: number): Promise<Usuario | any> {
    return firstValueFrom(
      this.httpClient.get<Usuario | any>(`${this.baseUrl}/${idUsuario}`)
    );
  };
  update(idUsuario: number, formValue: any): Promise<Usuario | any> {
    return firstValueFrom(
      this.httpClient.put<Usuario | any>(`${this.baseUrl}/${idUsuario}`, formValue)
    );
  };
  deleteUser(idUsuario: number): Promise<Usuario | any> {
    return firstValueFrom(
      this.httpClient.delete<Usuario | any>(`${this.baseUrl}/${idUsuario}`)
    );
  };


=======
  }
>>>>>>> 48c655e (formulario añadir nuevo usuario terminado)
=======

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

>>>>>>> feature/perfil_usuario
}

