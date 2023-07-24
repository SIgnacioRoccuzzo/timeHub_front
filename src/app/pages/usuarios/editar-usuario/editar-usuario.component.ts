import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { AdministradoresService } from 'src/app/services/administradores.service';
import * as dayjs from 'dayjs';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent {
  formulario: FormGroup;
  usuarioId: number;

  //Services
  activatedRoute = inject(ActivatedRoute);
  usuariosService = inject(UsuariosService);
  adminServicio = inject(AdministradoresService)

  constructor() {
    this.usuarioId = 0;
    this.formulario = new FormGroup({
      nombre: new FormControl(),
      apellidos: new FormControl(),
      dni: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
      telefono: new FormControl(),
      departamento: new FormControl(),
      fecha_alta: new FormControl(),
      estado: new FormControl()
    });
  };

  ngOnInit() {
    this.activatedRoute.params.subscribe(async params => {
      const usuario = await this.usuariosService.getById(params['usuarioId']);
      console.log(usuario)
      this.usuarioId = params['usuarioId'];

      const fechaFormateada = dayjs(usuario.fecha_alta).format('YYYY-MM-DD');
      const obj = { nombre: usuario.nombre, apellidos: usuario.apellidos, dni: usuario.dni, email: usuario.email, password: usuario.password, telefono: usuario.telefono, departamento: usuario.departamento, fecha_alta: fechaFormateada, estado: usuario.estado };
      this.formulario.setValue(obj);

    });
  }

  async onSubmit() {
    const response = await this.usuariosService.update(this.usuarioId, this.formulario.value);
    console.log(response)
  }
}

