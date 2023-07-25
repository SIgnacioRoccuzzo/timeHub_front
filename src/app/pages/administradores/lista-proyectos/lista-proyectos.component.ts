import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/interfaces/proyecto.interface';
import { ProyectosService } from 'src/app/services/proyectos.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-lista-proyectos',
  templateUrl: './lista-proyectos.component.html',
  styleUrls: ['./lista-proyectos.component.css']
})
export class ListaProyectosComponent {
  proyectosService = inject(ProyectosService)
  router = inject(Router);

  proyectos: Proyecto[] = []




  async ngOnInit() {
    try {
      this.proyectos = await this.proyectosService.getProyectos()
    } catch (error) {
      console.log(error);
    }
  }
  async deleteProyect(idProyecto: number) {
    const usuario = await this.proyectosService.deleteProyect(idProyecto)
    if (!usuario.fatal) {
      this.proyectos = await this.proyectosService.getProyectos();

      Swal.fire({
        title: 'Success!',
        text: 'Acabas de borrar un usuario',
        icon: 'success'
      })

      this.router.navigate(['/proyectos']);

    } else {
      console.log(usuario.fatal)
    }
  }

}
