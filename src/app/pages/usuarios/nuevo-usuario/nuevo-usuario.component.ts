import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.component.html',
  styleUrls: ['./nuevo-usuario.component.css']
})
export class NuevoUsuarioComponent {
  formulario: FormGroup;
  usuarioServices = inject(UsuariosService);
  router = inject(Router)

  constructor() {
    this.formulario = new FormGroup({
      id: new FormControl(),
      nombre: new FormControl(),
      apellidos: new FormControl(),
      dni: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
      telefono: new FormControl(),
      estado: new FormControl(),
      fecha_alta: new FormControl(),
      departamento: new FormControl()
    })
  }


  async onSubmit() {
    const response = await this.usuarioServices.create(this.formulario.value);

    if (response.fatal) {
      // Error en la inserción
      console.log(response.fatal);
      return alert('Error en el registro.');
    }

    // Inserción correcta
    this.router.navigate(['/usuarios']);
  }


}
