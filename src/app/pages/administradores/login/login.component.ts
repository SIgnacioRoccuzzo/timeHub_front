import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdministradoresService } from 'src/app/services/administradores.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  formulario: FormGroup;
  adminServicio = inject(AdministradoresService);
  router = inject(Router);

  mensajeError: boolean;

  showPassword: boolean = false;

  constructor() {
    this.formulario = new FormGroup({
      email: new FormControl(null, [
        Validators.required
      ]),
      password: new FormControl(null, [
        Validators.required
      ])
    })

    this.mensajeError = false
  }

  async onSubmit() {
    const response = await this.adminServicio.getLogin(this.formulario.value);
    console.log(response);

    if (response.fatal) {
      // return alert(response.fatal)
      this.mensajeError = true

      Swal.fire({
        title: 'Error!',
        text: response.fatal,
        icon: 'error'
      })
    } else {
      Swal.fire({
        title: 'Success!',
        text: response.success,
        icon: 'success'
      })

      localStorage.setItem('admin_token', response.token)
      this.router.navigate(['/usuarios'])
    }
  }


  checkError(field: string, error: string) {
    return this.formulario.get(field)?.hasError(error) && this.formulario.get(field)?.touched
  }

}
