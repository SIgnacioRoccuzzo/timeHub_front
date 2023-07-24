import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    this.activatedRoute.params.subscribe(async params => {
      this.usuario = await this.usuariosService.getById(params['idUsuario']);
      console.log(this.usuario)
    })


  }
}




/* async cambioHora() {
  const fecha = '2023-07-17'
  this.activatedRoute.params.subscribe(async params =>
    this.proyecto = await this.usuarioServices.getProyectos(params['idUsuario'], fecha))
  console.log('proyecto', this.proyecto)
*/





