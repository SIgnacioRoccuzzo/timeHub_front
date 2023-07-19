import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Proyecto } from 'src/app/interfaces/proyecto.interface';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})

export class ProyectosComponent {
  usuariosService = inject(UsuariosService)
  activatedRoute = inject(ActivatedRoute)

  proyecto: []

  constructor() {
    this.proyecto = []
  }

  async ngOnInit() {
    const fecha = '2023-07-17'
    this.activatedRoute.params.subscribe(async params => {
      const datosProyecto = await this.usuariosService.getProyectos(params['idUsuario'], fecha)
      const nombre = datosProyecto[0].proyecto
      console.log(datosProyecto)
    })


  }
}




/* async cambioHora() {
  const fecha = '2023-07-17'
  this.activatedRoute.params.subscribe(async params =>
    this.proyecto = await this.usuarioServices.getProyectos(params['idUsuario'], fecha))
  console.log('proyecto', this.proyecto)
*/


