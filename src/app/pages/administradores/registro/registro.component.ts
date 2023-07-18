import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AdministradoresService } from 'src/app/services/administradores.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  formulario: FormGroup;
  adminServicio = inject(AdministradoresService);
  router = inject(Router);

  constructor() {
    this.formulario = new FormGroup({
      nombre: new FormControl(),
      apellidos: new FormControl(),
      email: new FormControl(),
      password: new FormControl()
    })
  }

  async onSubmit() {
    console.log(this.formulario.value);
    const response = await this.adminServicio.getRegistro(this.formulario.value);
    console.log(response);

    this.router.navigate(['/login'])
  }
}
