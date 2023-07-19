<<<<<<< HEAD
import { Component } from '@angular/core';
import { Usuario } from 'src/app/interfaces/usuario.interface';
=======
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Proyecto } from 'src/app/interfaces/proyecto.interface';
import { Usuario } from 'src/app/interfaces/usuario.interface';
import { UsuariosService } from 'src/app/services/usuarios.service';
>>>>>>> feature/perfil_usuario


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {
<<<<<<< HEAD
  usuario: Usuario
  timer: Date

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


=======
  usuarioServices = inject(UsuariosService);
  activatedRoute = inject(ActivatedRoute);
>>>>>>> feature/perfil_usuario


  timer: Date
  usuario: Usuario
  proyecto: Proyecto[]

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
    this.proyecto = [{
      nombre: '',
      descripcion: ''
    }]
  }

  async ngOnInit() {
    const fecha = '2023-07-17'
    this.activatedRoute.params.subscribe(async params => {
      this.usuario = await this.usuarioServices.getById(params['idUsuario']);
      console.log(this.usuario)

      this.proyecto = await this.usuarioServices.getProyectos(params['idUsuario'], fecha)
      console.log('proyecto', this.proyecto)
    })


  }
}




/* async cambioHora() {
  const fecha = '2023-07-17'
  this.activatedRoute.params.subscribe(async params =>
    this.proyecto = await this.usuarioServices.getProyectos(params['idUsuario'], fecha))
  console.log('proyecto', this.proyecto)
*/


