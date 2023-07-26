import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/interfaces/proyecto.interface';
import { Usuario } from 'src/app/interfaces/usuario.interface';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-datos-perfil',
  templateUrl: './datos-perfil.component.html',
  styleUrls: ['./datos-perfil.component.css']
})
export class DatosPerfilComponent {
  usuariosService = inject(UsuariosService)
  activatedRoute = inject(ActivatedRoute)


  timer: Date
  usuario: Usuario
  proyecto: Proyecto[] = []

  constructor() {

    this.timer = new Date();
    this.usuario = {
      id: 0,
      nombre: '',
      apellidos: '',
      dni: '',
      email: '',
      password: '',
      telefono: '',
      fecha_alta: this.timer,
      estado: true,
      departamento: ''
    }
  }

  async ngOnInit() {
    this.usuario = await this.usuariosService.getByprofile();
    console.log(this.usuario)

  }
}












