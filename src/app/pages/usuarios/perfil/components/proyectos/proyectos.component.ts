import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';
import * as dayjs from 'dayjs';

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
  fecha: Date = new Date;

  constructor() {
    this.proyectos = []
  }

  async ngOnInit() {



  }

  cambioFecha($event: any) {
    this.fecha = $event.target.value

    this.activatedRoute.params.subscribe(async params => {
      const datosProyecto = await this.usuariosService.getProyectos(params['idUsuario'], this.fecha)
      this.nombreProyecto = datosProyecto[0].proyecto
      this.horasDedicadas = datosProyecto[0].horas

      console.log(this.proyectos)

    })
  }


}
