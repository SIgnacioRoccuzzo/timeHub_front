import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario.interface';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent {

  usuarios: Usuario[];

  //Services
  usuariosService = inject(UsuariosService);
  router = inject(Router);

  constructor() {
    this.usuarios = [];

  };

  async ngOnInit() {
    try {
      const response = await this.usuariosService.getAll();
      this.usuarios = response;
    } catch (error) {
      console.log(error);
    }
  };
  async borrarUser(idUsuario: number) {
    console.log(idUsuario)
    const usuario = await this.usuariosService.deleteUser(idUsuario);
    if (!usuario.fatal) {
      const response = await this.usuariosService.getAll();
      this.usuariosService = response;
    } else {
      console.log(usuario.fatal)
    }
  }
}
