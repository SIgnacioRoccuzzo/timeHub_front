import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login-usuarios',
  templateUrl: './login-usuarios.component.html',
  styleUrls: ['./login-usuarios.component.css']
})
export class LoginUsuariosComponent {
  formulario: FormGroup
  usuariosService = inject(UsuariosService);
  router = inject(Router);
  title = inject(Title)
  mensajeError: boolean;

  showPassword: boolean = false;

  constructor() {
    this.title.setTitle('Login Usuario')
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
    const response = await this.usuariosService.getLoginUser(this.formulario.value);
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

      localStorage.setItem('user_token', response.token)

      this.router.navigate(['usuarios', 'perfil'])

    }
  }
  checkError(field: string, error: string) {
    return this.formulario.get(field)?.hasError(error) && this.formulario.get(field)?.touched
  }
}


