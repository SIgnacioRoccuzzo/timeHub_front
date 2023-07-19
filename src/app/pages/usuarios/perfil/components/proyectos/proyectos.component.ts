import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})

export class ProyectosComponent {
  usuariosService = inject(UsuariosService)
  activatedRoute = inject(ActivatedRoute)

  proyectos: []
  nombreProyecto: string = ''
  horasDedicadas: number = 0
  fecha: string = ''

  constructor() {
    this.proyectos = []
  }

  async ngOnInit() {


  }
  // cambioFecha($event: any) {
  //   this.fecha = $event?.target.value

  //   this.activatedRoute.params.subscribe(async params => {
  //     const datosProyecto = await this.usuariosService.getProyectos(params['idUsuario'], this.fecha)
  //     this.nombreProyecto = datosProyecto[0].proyecto
  //     this.horasDedicadas = datosProyecto[0].horas

  //     console.log(this.proyectos)

  //     console.log(this.horasDedicadas);


  //   })

  // }

  cambioFecha($event: any) {
    this.fecha = $event?.target.value

    this.activatedRoute.params.subscribe(async params => {
      const datosProyecto = await this.usuariosService.getProyectos(params['idUsuario'], this.fecha)
      this.nombreProyecto = datosProyecto[0].proyecto
      this.horasDedicadas = datosProyecto[0].horas

      console.log(this.proyectos)

    })

  }




  /* async cambioHora() {
    const fecha = '2023-07-17'
    this.activatedRoute.params.subscribe(async params =>
      this.proyecto = await this.usuarioServices.getProyectos(params['idUsuario'], fecha))
    console.log('proyecto', this.proyecto)
  */

}
