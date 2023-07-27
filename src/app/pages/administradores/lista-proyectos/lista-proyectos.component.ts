import { Component, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/interfaces/proyecto.interface';
import { DarkModeService } from 'src/app/services/dark-mode.service';
import { ProyectosService } from 'src/app/services/proyectos.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-lista-proyectos',
  templateUrl: './lista-proyectos.component.html',
  styleUrls: ['./lista-proyectos.component.css']
})
export class ListaProyectosComponent {
  proyectosService = inject(ProyectosService)
  darkModeService = inject(DarkModeService)
  router = inject(Router);

  proyectos: Proyecto[] = []
  title = inject(Title)

  async ngOnInit() {
    this.title.setTitle('Lista de Proyectos')
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

  get darkMode(): boolean {
    return this.darkModeService.darkMode;
  }

}
