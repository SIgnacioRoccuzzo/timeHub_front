import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdministradoresService } from 'src/app/services/administradores.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  formulario: FormGroup;
  adminServicio = inject(AdministradoresService);
  router = inject(Router);

  mensajeError: boolean;

  showPassword: boolean = false;

  constructor() {
    this.formulario = new FormGroup({
      nombre: new FormControl(null, [
        Validators.required,
        Validators.minLength(2)
      ]),

      apellidos: new FormControl(null, [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20)
      ]),

      email: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,10}$/)
      ]),

      password: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)
      ])
    })

    this.mensajeError = false;
  }

  async onSubmit() {
    console.log(this.formulario.value);
    const response = await this.adminServicio.getRegistro(this.formulario.value);
    console.log(response);

    Swal.fire({
      title: 'Success!',
      text: 'Tu registro se ha realizado con éxito',
      icon: 'success'
    })
    this.router.navigate(['/login'])
  }

  checkError(field: string, error: string) {
    return this.formulario.get(field)?.hasError(error) && this.formulario.get(field)?.touched
  }
}
