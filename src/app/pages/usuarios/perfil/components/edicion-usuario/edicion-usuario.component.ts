import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
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
  title = inject(Title)
  private darkModeService = inject(DarkModeService);

  //Services
  activatedRoute = inject(ActivatedRoute);
  usuariosService = inject(UsuariosService);
  adminServicio = inject(AdministradoresService)

  constructor() {
    this.title.setTitle('Editar mi Perfil')
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
      const obj = { email: usuario.email, telefono: usuario.telefono, password: '' };
      this.formulario.setValue(obj);
    });
  }

  async onSubmit() {
    const response = await this.usuariosService.updateUsuario(this.usuarioId, this.formulario.value);
    console.log(response)


    if (!response.fatal) {
      Swal.fire({
        title: 'Success!',
        text: 'Actualización con éxito',
        icon: 'success'
      })

      this.router.navigate(['/usuarios/perfil']);
    }
  }

  checkError(field: string, error: string) {
    return this.formulario.get(field)?.hasError(error) && this.formulario.get(field)?.touched
  }
  get darkMode(): boolean {
    return this.darkModeService.darkMode;
  }

}
