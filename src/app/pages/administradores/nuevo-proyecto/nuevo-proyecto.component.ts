import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DarkModeService } from 'src/app/services/dark-mode.service';
import { ProyectosService } from 'src/app/services/proyectos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nuevo-proyecto',
  templateUrl: './nuevo-proyecto.component.html',
  styleUrls: ['./nuevo-proyecto.component.css']
})
export class NuevoProyectoComponent {
  formulario: FormGroup;
  proyectoService = inject(ProyectosService)
  router = inject(Router)

  private darkModeService = inject(DarkModeService);

  constructor() {
    this.formulario = new FormGroup({
      nombre: new FormControl,
      descripcion: new FormControl
    })

  }

  async onSubmit(): Promise<any> {
    await this.proyectoService.create(this.formulario.value);
    Swal.fire({
      title: 'Success!',
      text: 'creación de nuevo usuario con éxito',
      icon: 'success'
    })
    this.router.navigate(['/usuarios']);



    Swal.fire({
      title: 'Success!',
      text: 'Se ha registrado con éxito',
      icon: 'success'
    })
    this.router.navigate(['/proyectos']);
  }

  get darkMode(): boolean {
    return this.darkModeService.darkMode;
  }
}
