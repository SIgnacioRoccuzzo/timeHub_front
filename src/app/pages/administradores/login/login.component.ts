import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AdministradoresService } from 'src/app/services/administradores.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  formulario: FormGroup;
  adminServicio = inject(AdministradoresService);
  router = inject(Router);

  constructor() {
    this.formulario = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
  }

  async onSubmit() {
    const response = await this.adminServicio.getLogin(this.formulario.value);
    console.log(response);

    if (response.fatal) {
      return alert(response.fatal)
    }

    localStorage.setItem('admin_token', response.token)
    this.router.navigate(['/usuarios'])
  }

}
