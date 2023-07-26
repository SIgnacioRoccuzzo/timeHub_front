import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as dayjs from 'dayjs';
import { AdministradoresService } from 'src/app/services/administradores.service';
import { DarkModeService } from 'src/app/services/dark-mode.service';
import { UsuariosService } from 'src/app/services/usuarios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edicion-usuario',
  templateUrl: './edicion-usuario.component.html',
  styleUrls: ['./edicion-usuario.component.css']
})
export class EdicionUsuarioComponent {
  formulario: FormGroup;

  router = inject(Router);
  usuarioId: number;

  private darkModeService = inject(DarkModeService);

  //Services
  activatedRoute = inject(ActivatedRoute);
  usuariosService = inject(UsuariosService);
  adminServicio = inject(AdministradoresService)

  constructor() {
    this.usuarioId = 0;
    this.formulario = new FormGroup({
      email: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,10}$/)
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)
      ]),
      telefono: new FormControl(null, [
        Validators.required,
        Validators.minLength(9)
      ]),


    });
  };

  ngOnInit() {
    this.activatedRoute.params.subscribe(async params => {
      const usuario = await this.usuariosService.getById(params['usuarioId']);
      console.log(usuario)
      this.usuarioId = params['usuarioId'];

      const fechaFormateada = dayjs(usuario.fecha_alta).format('YYYY-MM-DD');
      const obj = { nombre: usuario.nombre, apellidos: usuario.apellidos, dni: usuario.dni, email: usuario.email, telefono: usuario.telefono, departamento: usuario.departamento, fecha_alta: fechaFormateada, estado: usuario.estado };
      this.formulario.setValue(obj);


      this.formulario.markAllAsTouched();
    });
  }

  async onSubmit() {
    const response = await this.usuariosService.update(this.usuarioId, this.formulario.value);
    console.log(response)


    if (!response.fatal) {
      Swal.fire({
        title: 'Success!',
        text: 'Actualización con éxito',
        icon: 'success'
      })

      this.router.navigate(['/usuarios']);
    }
  }

  checkError(field: string, error: string) {
    return this.formulario.get(field)?.hasError(error) && this.formulario.get(field)?.touched
  }

}
